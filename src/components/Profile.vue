<template>
    <div class="main-body">
        <div>
            <Navbar/>
        </div>
        <div>
            <SubNavbar/>
        </div>
        <div class="content-body">
            <div class="user-profile">
                <div class="username"><h4>Username :-</h4><p> &nbsp; Gandhi Boi</p></div>
                <div class="username"><h4>Email :-</h4><p> &nbsp; gandhihatesgodse@gmail.com</p></div>
                <div class="username"><h4>Points :-</h4><p> &nbsp; 1000</p></div>
                <div class="username"><h4>Membership :-</h4><p> &nbsp; Platinum</p></div>
            </div>
            <div class="product-history">
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
                <ProductHistory/>
            </div>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import ProductHistory from './ProductHistory.vue'
export default {
  name: 'home',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductHistory
  }
}
</script>
<style scoped>
.content-body{
    display: flex;
    justify-content: space-between;
}
.user-profile{
    margin-left: 75px;
    margin-top: 75px;
    margin-right: 75px;
    margin-bottom: 75px;
    padding-top: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-right: 50px;
    width: 30%;
    border: red dotted 2px;
    border-radius: 10%;
}
h4{
    font-family: fantasy;
}
.username{
    display:flex;
}
p{
    font-family: cursive;
    font-size: 20px;
}
</style>
