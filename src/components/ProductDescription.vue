<template>
    <div>
        <div>
        <Navbar/>
    </div>
    <div>
        <SubNavbar/>
    </div>
    <div class="product-main">
        <div class="product-image">
            <img src="@/assets/covidessentials.jpeg" alt="" height="500px" width="500px">
        </div>
        <div>
            <h2>Covid Essentials</h2>
        </div>
        <div>
            <h3>$400</h3>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'about',
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
<style scoped>
.product-main{
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.product-image{
    margin-left: 100px;
    border: black 4px solid;
}
</style>
