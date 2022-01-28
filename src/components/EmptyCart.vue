<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div>
            <img src="@/assets/empty_cart.png" alt="" width="100%" height="350px">
            <span>Please <a class="text" href="#/login">Login/SignUp</a> to continue </span>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'EmptyCart',
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
<style scoped>
.main-body{
    background-color:#E3E2DF;
}
img{
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 20px;
}
span{
    text-align: center;
    padding-top: 20px;
    margin-top: 15px;
    margin-left: 600px;
    font: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
}
.text{
    color: #9a1750;
}
</style>
