<template>
  <div class="header">
    <div class="logo">
      <!-- LOGO--200x50 -->
      <img src="https://raw.githubusercontent.com/VisionView/lib/master/img/ynnu.gif" alt="logo" class="logo-img" title="logo">
    </div>
    <div class="out-menu el-icon-s-fold" :class="Active" @click="menuClick" title="展开侧边栏"></div>
    <el-menu active-text-color="#ffd04b" mode="horizontal" :default-active="defaultActive">
      <el-menu-item v-for="(item, i) in route" :key="i" :index="item.path[0].path" @click="linkAside(i, item.path)">{{item.name}}</el-menu-item>
    </el-menu>
    <user-drop/>
  </div>
</template>
<script>
import Bus from '@/assets/bus.js'
import UserDrop from './user'
import fun from '@/router/siderPath.js'
let { head } = fun()
export default {
  name: 'Header',
  components: {
    UserDrop
  },
  data () {
    return {
      Collapse: false,
      isActive: false,
      indexErr: 0,
      route: head,
      defaultActive: head[0].path[0].path
    }
  },
  methods: {
    linkAside (index, path) {
      if (index !== this.indexErr) {
        Bus.$emit('asidePath', path)
        this.$router.push({ 'path': path[0].path })
      }
      this.indexErr = index
    },
    menuClick () {
      this.Collapse = !this.Collapse
      this.isActive = !this.isActive
      Bus.$emit('collapse', this.Collapse)
    }
  },
  computed: {
    Active () {
      return this.isActive ? 'rotateGo' : 'rotateBack'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~css/base.styl'
.header
  display flex
  .el-menu
    flex 1
    width 100%
  .logo
    float left
    height 50px
    width 200px
    padding 0 10px
    line-height 50px
    color #fff
    .logo-img
      height 50px
      width 200px
.out-menu
  width 50px
  height 50px
  line-height 50px
  font-size 26px
  color #fff
  text-align center
  cursor pointer
.rotateGo
  rotateA()
.rotateBack
  rotateB()
</style>
