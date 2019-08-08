import Main from '@/views/common/main.vue'
export default () => {
  let head = [
    // 后台数据
    {
      name: '首页',
      path: [
        {
          path: 'echart',
          name: 'echart',
          meta: { name: '数据图表', icon: 'el-icon-pie-chart', auth: true },
          component: () => import('@/views/admin/base/base.vue')
        },
        {
          path: 'base',
          name: 'base',
          meta: { name: '基础设置', icon: 'el-icon-setting', auth: true },
          component: () => import('@/views/admin/base/base.vue')
        },
        {
          path: 'sysmanage',
          name: 'sysmanage',
          meta: { name: '系统设置', icon: 'el-icon-user', auth: true },
          component: Main,
          children: [
            { path: '/suser', name: '/suser', meta: { name: '管理员管理', auth: true }, component: () => import('@/views/login/login.vue') }
            // { path: '/suser', name: '/suser', meta: { name: '系统及版权' }, component: () => import('@/views/manage/suser.vue') }
          ]
        }
      ]
    },
    // 网站数据
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
    // 微信小程序数据
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
    },
    // 通知信息
    {
      name: '通知信息',
      path: [
        {
          path: 'notice',
          name: 'notice',
          meta: { name: '系统通知', icon: 'el-icon-chat-dot-square', auth: true },
          component: () => import('@/views/login/login.vue')
        },
        {
          path: 'info2',
          name: 'info',
          meta: { name: '用户反馈', icon: 'el-icon-message', auth: true },
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
  return { head, sideRouter }
}
