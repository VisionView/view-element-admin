<template>
  <el-container>
    <el-header>
      <home-head />
    </el-header>
    <el-container>
      <home-aside />
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HomeHead from './components/header'
import HomeAside from './components/aside'
export default {
  name: 'layout',
  components: {
    HomeHead,
    HomeAside
  },
  methods: {
  }
}
</script>
