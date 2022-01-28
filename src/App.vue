<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view :user="user"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      user: {
        name: null,
        email: null,
        points: null
      }
    }
  }
}
</script>

<style>

</style>
