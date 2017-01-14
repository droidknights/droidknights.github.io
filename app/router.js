import Vue from 'vue'
import VueRouter from 'vue-router'

/* eslint-disable no-new */
Vue.use(VueRouter)

/* Layouts */
import Home from './layout/home/Home'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    }
  ]
})

export default router
