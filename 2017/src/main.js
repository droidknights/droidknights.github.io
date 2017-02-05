import Vue from 'vue'
import App from './App.vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import router from './router'

Vue.use(VueRx, Rx)

const app = new Vue(
  Vue.util.extend({ router }, App)
).$mount('#app')

export {app, router}
