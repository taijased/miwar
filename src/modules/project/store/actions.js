
import ProjectServices from '../api/ProjectServices';
import Router from '../../../router';


export function setContent({commit}, payload) {
  commit("SET_CONTENT", payload);
}


export function setProject({commit}, payload) {
  commit("SET_PROJECT", payload);
}




export async function generateMark({dispatch}, payload) {
  new Promise((resolve, reject) => {
    ProjectServices.getMarker(payload)
      .then(response => {
        

        window.open(process.env.VUE_APP_API_URL + "marker/" + payload,'_blank');
        resolve(response)
      })
      .catch(error => {
        reject(error)
      });
  })
}

export function updateProject({commit}, payload) {
  new Promise((resolve, reject) => {
    ProjectServices.updateProject(payload)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      });
  })
}





export function fetchProjects({commit}, payload) {
  new Promise((resolve, reject) => {
    ProjectServices.fetchProjects()
      .then(response => {
        commit("SET_PROJECTS", response.data.result);
        resolve(response)
      })
      .catch(error => {
        reject(error)
      });
  })
}


export function removeProject({dispatch}, payload) {
  this._vm.$snotify.async('Пожалуйста подождите...', 'Удаление', () => 
    new Promise((resolve, reject) => {
      ProjectServices.removeProjects(payload)
        .then(response => {
          resolve({
            title: 'Успешно!',
            body: 'Вы удалили проект!',
            config: {
              timeout: 2000,
              showProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              position: 'rightTop'
            } 
          })
          dispatch("fetchProjects")
        })
        .catch(error => {
          setTimeout(() => {
            reject({
              title: 'Упс!!!',
              body: 'Пожалуйста попробуйте снова!',
              config: {
                timeout: 2000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                position: 'rightTop'
              }
            })
          }, 2000);
        });
    }
  ));
}


export function fetchProject({dispatch, commit}, payload) {
  new Promise((resolve, reject) => {
    ProjectServices.getProject(payload)
      .then(response => {
        commit("SET_PROJECT", response.data.result)
        dispatch('main/setProjectName', response.data.result.name, { root: true } )
        resolve(response)
      })
      .catch(error => {
        reject(error)
      });
  })
}




export function createProject({commit}, payload) {
  new Promise((resolve, reject) => {
    ProjectServices.createProject(payload)
      .then(response => {
        Router.push('/project/' + response.data.result.Id)
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
}