import Vue from 'vue'
import Router from 'vue-router'
import fun from './siderPath.js'
let { sideRouter } = fun()
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { name: '登录', auth: false },
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'layout',
      redirect: 'base',
      meta: { name: 'layout', auth: true },
      component: () => import('@/views/layout/layout.vue'),
      children: sideRouter
    },
    {
      path: '/404',
      name: '404',
      mate: { name: '404' },
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
