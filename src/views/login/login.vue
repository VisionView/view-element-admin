<template>
  <div>login</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {
    getInfo () {
      this.$axios.post('ftghjkl;')
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>