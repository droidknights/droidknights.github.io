import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layouts */
import Home from './pages/Home.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/2017',
      component: Home
    }
  ]
})

export default router
