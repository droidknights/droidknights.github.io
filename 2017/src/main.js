import Vue from 'vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueRx, Rx)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDvFB_V9GZguW_JIrUK55_3KWoTYThgy1E',
    v: '3.26'
  }
});

new Vue({
  router
}).$mount('#app')
