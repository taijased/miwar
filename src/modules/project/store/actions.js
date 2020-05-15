
import ProjectServices from '../api/ProjectServices';
import Router from '../../../router';
import THREEx from '../api/threex-arpatternfile';


export function setContent({commit}, payload) {
  commit("SET_CONTENT", payload);
}


export function setProject({commit}, payload) {
  commit("SET_PROJECT", payload);
}




export async function generateMark({dispatch}, payload) {

  dispatch('main/setLoadingStatus', true, { root: true } )

  const loadImageCrossOrigin = url => new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onerror = error => reject(error);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);

      resolve(canvas.toDataURL('image/jpeg'));
    };
  });


  // alert(`GET: ${process.env.VUE_APP_API_URL}marker/${payload}`)
  new Promise((resolve, reject) => {
    ProjectServices.uploadMarker(payload)
      .then(async response => {

        // alert(`THREEx.ArPatternFile.encodeImageUR`)

        let innerImageURL = await loadImageCrossOrigin(`${process.env.VUE_APP_API_URL}marker/${payload}`);
        THREEx.ArPatternFile.encodeImageURL(innerImageURL, function onComplete(patternFileString){        
          let blobPattern = new Blob([patternFileString], {type : 'application/octet-stream'});
          let formData = new FormData();
          formData.append("webmasterfile", blobPattern);

          // alert(`POST: ${process.env.VUE_APP_API_URL}marker/${payload}  multipart/data`)
          new Promise((resolve, reject) => {
            ProjectServices.uploadPattern(payload, formData)
              .then(response => {
                dispatch('main/setLoadingStatus', false, { root: true } )
                window.open(process.env.VUE_APP_API_URL + "marker/" + payload,'_blank');
                resolve(response)
              })
              .catch(error => {
                dispatch('main/setLoadingStatus', false, { root: true } )
                reject(error)
              })
          })

          dispatch('main/setLoadingStatus', false, { root: true } )
        });


        resolve(response)
      })
      .catch(error => {
        dispatch('main/setLoadingStatus', false, { root: true } )
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





export function fetchProjects({dispatch, commit}, payload) {

  dispatch('main/setLoadingStatus', true, { root: true } )
  new Promise((resolve, reject) => {
    ProjectServices.fetchProjects()
      .then(response => {
        commit("SET_PROJECTS", response.data.result);
        dispatch('main/setLoadingStatus', false, { root: true } )
        resolve(response)
      })
      .catch(error => {
        dispatch('main/setLoadingStatus', false, { root: true } )
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
  dispatch('main/setLoadingStatus', true, { root: true } )
  new Promise((resolve, reject) => {
    ProjectServices.getProject(payload)
      .then(response => {
        commit("SET_PROJECT", response.data.result)
        dispatch('main/setProjectName', response.data.result.name, { root: true } )
        dispatch('main/setLoadingStatus', false, { root: true } )
        resolve(response)
      })
      .catch(error => {
        dispatch('main/setLoadingStatus', false, { root: true } )
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