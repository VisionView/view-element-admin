<template>
  <el-dropdown>
  <div class="el-dropdown-link">
    <img src="https://raw.githubusercontent.com/VisionView/lib/master/img/user.jpg" alt="" class="user-img">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </div>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人信息</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</template>
<script>
export default {
  name: 'User'
}
</script>
<style lang="stylus" scoped>
.el-dropdown
  padding 0 10px
  cursor pointer
.user-img
  float left
  width 36px
  height 36px
  margin 7px 0
  border-radius 10px
.el-icon--right
  color #fff
</style>
