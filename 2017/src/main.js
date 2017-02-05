import Vue from 'vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import router from './router'

Vue.use(VueRx, Rx)

new Vue({
  router
}).$mount('#app')
