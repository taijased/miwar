export default {
  isAuthorize: localStorage.getItem('isAuthorize') || false,
  token: localStorage.getItem('token') || '',
  authUser: JSON.parse(localStorage.getItem('user')) || '',
  error: false,
  modalSignup: false,
  tabsSignup: false,
  loading: false
}
