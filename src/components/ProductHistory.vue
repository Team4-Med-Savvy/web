<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="content-body">
              <div class="main" >
                 <product-info v-for="i in productHistory" :key="i.productId" :i="i"/>
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
import OrderHistory from './OrderHistory.vue'
import ProductInfo from './ProductInfo.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'profile',
  props: ['id'],
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductHistory,
    OrderHistory,
    ProductInfo
  },
  created () {
    let orderId = this.$route.params.id
    console.log(orderId)
    this.$store.dispatch('getProductHistory', orderId)
  },
  computed: mapGetters(['productHistory'])
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

</style>
