<template>
  <div class="aside">
    <el-menu :router="true" :default-active="asideActive">
      <template v-for="(items, index) in Routers">
        <el-submenu v-if="items.children" :index="items.name" :key="index">
          <template slot="title">
            <i :class="items.meta.icon"></i>
            <span>{{items.meta.name}}</span>
          </template>
          <span v-for="(child, i) in items.children" :key="i">
            <el-menu-item :index="child.path" >{{child.meta.name}}</el-menu-item>
          </span>
        </el-submenu>
        <template v-else>
          <el-menu-item :index="items.path" :key="items.path">
            <i :class="items.meta.icon"></i>
            <span slot="title">{{items.meta.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import Bus from '@/assets/bus.js'
import fun from '@/router/siderPath.js'
let { head } = fun()
export default {
  name: 'Aside',
  data () {
    return {
      Routers: null,
      asideActive: null
    }
  },
  mounted () {
    this.Routers = head[0].path
    this.asideActive = head[0].path[0].path
    Bus.$on('asidePath', res => {
      this.Routers = res
      this.asideActive = res[0].path
    })
  },
  methods: {
  }
}
</script>
