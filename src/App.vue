<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <show></show>
  </div>
</template>

<script>
import Show from '@/views/Show.vue'

export default {
  name: 'app',
  components: {
    Show
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  text-align: left;
  color: #2c3e50;
}
</style>
