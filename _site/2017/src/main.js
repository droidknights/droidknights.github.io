import Vue from 'vue'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import router from './router'

Vue.use(VueRx, Rx)

new Vue({
  router
}).$mount('#app')
// import Vue from 'vue'
// import Rx from 'rxjs/Rx'
// import VueRx from 'vue-rx'
// import routes from './router'
//
// Vue.use(VueRx, Rx)
//
// const app = new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       const matchingView = routes[this.currentRoute]
//       return matchingView
//         ? require('./pages/' + matchingView + '.vue')
//         : require('./pages/Home.vue')
//     }
//   },
//   render (h) {
//     return h(this.ViewComponent)
//   }
// })
//
// window.addEventListener('popstate', () => {
//   app.currentRoute = window.location.pathname
// })
