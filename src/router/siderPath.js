export default () => {
  let head = [
    {
      name: '后台首页',
      path: [
        {
          path: 'info',
          name: 'info',
          meta: { name: '学生信息管理', icon: 'iconfont icon-info', auth: true },
          component: () => import('@/views/login/login.vue')
        }
      ]
    },
    {
      name: '网站设置',
      path: [
        {
          path: 'info1',
          name: 'info',
          meta: { name: '成绩信息管理', icon: 'iconfont icon-info', auth: true },
          component: () => import('@/views/login/login.vue')
        }
      ]
    },
    {
      name: '微信小程序',
      path: [
        {
          path: 'info2',
          name: 'info',
          meta: { name: '收费信息管理', icon: 'iconfont icon-info', auth: true },
          component: () => import('@/views/login/login.vue')
        }
      ]
    }
  ]
  let sideRouter = []
  for (let i = 0; i < head.length; i++) {
    for (let j = 0; j < head[i].path.length; j++) {
      sideRouter.push(head[i].path[j])
    }
  }
  console.log(sideRouter[0])
  return { head, sideRouter }
}
