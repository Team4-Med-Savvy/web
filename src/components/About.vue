<template>
  <div class="main-body">
    <div>
      <Navbar/>
    </div>
    <div class="subnav-bar">
      <SubNavbar/>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar
  }
}
</script>
<style scoped>
.main-body{
}
</style>
