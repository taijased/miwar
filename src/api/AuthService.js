
import API from './Api'


const TOKEN_KEY = 'token'

const AuthService = {
  requireAuth (to, from, next) {
    const isAuthorize = localStorage.getItem('isAuthorize')
    console.log(isAuthorize);
    if (isAuthorize) {
      next()
    } else {
      next({
        path: '/signin'
      })
    }
  },
  isAuthorize () {
    const isAuthorize = localStorage.getItem('isAuthorize')
    if (isAuthorize) { 
      return true
    } else {
      window.location.reload();
    }
  },
  registration(data) {
    return API.post('signup', data)
  },
  login(data) {
    return API.post('signin', data)
  },
}

export default AuthService
