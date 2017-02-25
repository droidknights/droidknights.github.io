import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layouts */
import Home from './pages/Home.vue'
import Schedule from './pages/Schedule.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Schedule
    },
    {
      path: '/schedule',
      component: Schedule
    }
  ]
})

export default router
