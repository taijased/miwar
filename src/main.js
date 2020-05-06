import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'





Vue.config.productionTip = false

// Global style css
import './style/font.css'
import './style/reset-from.css'
import './style/animation.css'
import i18n from './i18n'




//Quill


import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)





import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);



//Notification
// import Snotify, { SnotifyPosition } from 'vue-snotify'

// const options = {
//   toast: {
//     position: SnotifyPosition.rightTop
//   }
// }
// Vue.use(Snotify, options)


import Snotify from 'vue-snotify';
Vue.use(Snotify)


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
