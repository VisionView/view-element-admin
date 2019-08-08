# view-element-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```


## 组件安装
### 一、element-ui
``` bash
npm i element-ui --save
# mian.js中引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

### 二、stylus
``` bash
# 安装
npm i stylus stylus-loader --save
```

### 三、fastclick
``` bash
npm i fastclick --save
# main.js
import fastclick from 'fastclick'
fastclick.attach(document.body)
```

### 四、axios
``` bash
# 安装
npm i axios --save
# 在src目录下建立utils文件夹，并建立Axios.js文件
# 在Axios.js中写入一下代码：
```
``` js
// Axios.js
```

### 、路由守卫
``` js
// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断path 的 auth是否为true 即需要登录
  if (to.meta.auth) {
    if (JSON.parse(localStorage.getItem('token'))) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
  if (to.fullPath === '/login') {
    if (JSON.parse(localStorage.getItem('token'))) {
      next({
        path: from.fullPath
      })
    } else {
      next()
    }
  }
})
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
