<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="content-body">
            <div class="product-info">
                <ProductInfo/>

            </div>
        </div>
        <div class="footer"><Footer/></div>
    </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import ProductHistory from './ProductHistory.vue'
import ProductInfo from './ProductInfo.vue'

export default {
  name: 'profile',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductHistory,
    ProductInfo
  }
}
</script>
<style scoped>
.content-body{
    display: flex;
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
    width: 450px;
    height: 30%;
    border: blue dotted 2px;
    border-radius: 10%;
    position: -webkit-sticky;
    position: sticky;
    top: 130px;
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
.product-info{
    margin-left: 50px;
    margin-top: 40px;
}

</style>
