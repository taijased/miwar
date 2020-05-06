import AuthService from '../../../api/AuthService'
import Router from '../../../router';
import Notifications from '../../../services/Notifications';



export async function signin ({commit, dispatch}, payload) {

 
  // try {
  //   let data = {
  //     "login": payload.email,
  //     "password": payload.password,
  //   }
  //   await new Promise((resolve, reject) => {
  //     AuthService.login(data)
  //       .then(response => {
  //         console.log(response);
  //         commit('LOGIN_SUCCESS', response.data)
  //         commit('SET_AUTH_USER', response.data.personal)
  //         Router.push('/')
  //         resolve(response);
  //       })
  //       .catch(error => {
  //         reject(error)
  //       });
  //   })
  // } catch (error) {
  //   Notifications.error('Ошибка ввода', 'Неправильный логин или пароль', this._vm.$snotify)
  // }


  let data = {
    "login": payload.email,
    "password": payload.password,
  }
  console.log(data);

  this._vm.$snotify.async('Пожалуйста подождите...', 'Вход', () => 
    new Promise((resolve, reject) => {
      AuthService.login(data)
        .then(response => {
          console.log(response);
          commit('LOGIN_SUCCESS', response.data)
          commit('SET_AUTH_USER', response.data.personal)
          Router.push('/') 
          resolve({
            title: 'Успешно!',
            body: 'Вход успешно выполнен!',
            config: {
              timeout: 1200,
              showProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              position: 'rightBottom'
            } 
          })

        })
        .catch(error => {
          setTimeout(() => {
            reject({
              title: 'Ошибка ввода!',
              body: 'Неправильный логин или пароль!',
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

export function signout ({commit}) {
    commit('LOGOUT')
}

export function registration({commit, dispatch}, payload) {

  let data = {
    "login": payload.email,
    "password": payload.password,
    "email": payload.email,
    "name": payload.name
  }

  //что то не получилось через прокси класс реализовать, сори тупой
  this._vm.$snotify.async('Пожалуйста подождите...', 'Регистрация', () => 
    new Promise((resolve, reject) => {
      AuthService.registration(data)
        .then(response => {
            resolve({
              title: 'Успешно!',
              body: 'Вы зарегестрировались, проверьте почту :)',
              config: {
                timeout: 2000,
                showProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                position: 'rightTop'
              } 
            })
            Router.push('/signin')
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





export function updateModalSignUp({ commit }) {
  commit("UPDATE_MODAL_SIGNUP");
}

export function updateTabsSignUp({ commit }) {
  commit("UPDATE_TABS_SIGNUP");
}


export function updateLoading({ commit }) {
  commit("UPDATE_LOADING");
}
