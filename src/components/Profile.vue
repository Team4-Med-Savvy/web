<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="content-body">
            <div class="user-profile">
                    <div class="username"><h4>Name: {{name}}</h4><p> &nbsp;</p></div>
                <div class="username"><h4>Email :- {{email}}</h4><p> &nbsp;</p></div>
                <div class="username"><h4>Points :-{{points}}</h4><p> &nbsp;</p></div>
                <div class="username"><h4>Membership :-</h4><p> &nbsp;</p></div>
                </div>
            </div>
<<<<<<< HEAD
            <!-- <div class="product-history mt-5">
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
            </div> -->
=======
            <div class="order-history">
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>
                <OrderHistory class="pb-4"/>

            </div>
        </div>
>>>>>>> 22c0d80dea217222a704c00c5c998ef3c9f607e6
        <div class="footer"><Footer/></div>
    </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import ProductHistory from './ProductHistory.vue'
import OrderHistory from './OrderHistory.vue'
import ProfileProduct from './ProductInfo.vue'

export default {
  name: 'profile',
  components: {
    Navbar,
    SubNavbar,
    Footer,
<<<<<<< HEAD
    ProductHistory
  },
  data () {
    return {
      name: null,
      email: null,
      points: null
    }
  },
  created () {
    this.name = sessionStorage.getItem('name')
    this.email = sessionStorage.getItem('email')
    this.points = sessionStorage.getItem('points')
=======
    ProductHistory,
    OrderHistory,
    ProfileProduct
>>>>>>> 22c0d80dea217222a704c00c5c998ef3c9f607e6
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
    border-radius: 5%;
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
.order-history{
    margin-left: 150px;
    margin-top: 80px;
    margin-bottom: 45px;
}
</style>
