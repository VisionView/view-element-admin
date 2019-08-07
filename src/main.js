import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import fastclick from 'fastclick'

import 'element-ui/lib/theme-chalk/index.css'
import 'css/reset.css'
import 'css/elementUI.css'
fastclick.attach(document.body)
Vue.use(ElementUI)

Vue.config.productionTip = false

// 路由守卫
// router.beforeEach((to, from, next) => {
//   // 判断path 的 auth是否为true 即需要登录
//   if (to.meta.auth) {
//     if (JSON.parse(localStorage.getItem('token'))) {
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
//   if (to.fullPath === '/login') {
//     if (JSON.parse(localStorage.getItem('token'))) {
//       next({
//         path: from.fullPath
//       })
//     } else {
//       next()
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
