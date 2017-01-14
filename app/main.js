import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import {sync} from 'vuex-router-sync'

import router from './router'
import store from './vuex/store'

Vue.use(VueRx, Rx)
Vue.use(VueResource)
Vue.use(VeeValidate)

sync(store, router)

/* mount vue app */
new Vue({
  store,
  router
}).$mount('#app')
