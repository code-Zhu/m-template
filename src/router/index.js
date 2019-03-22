import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
const index = () => import('@/pages/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index
    }
  ]
})
