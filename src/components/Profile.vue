<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="content-body">
<div class="user-profile">
<div class="username"><h4>Name : {{user.name}}</h4><p> &nbsp;</p></div>
<div class="username"><h4>Email : {{user.email}}</h4><p> &nbsp;</p></div>
<div class="username"><h4>Points :{{user.points}}</h4><p> &nbsp;</p></div>
<div class="username"><h4>Membership :</h4><p> &nbsp;</p></div>
</div>

 <!-- <div class="order-history">
      <OrderHistory class="pb-4"/>

  </div> -->
  <div class="main" >
      <order-history v-for="item in allOrders" :key="item.id" :item="item"/>
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
import {mapGetters} from 'vuex'

export default {
  name: 'profile',
  data () {
    return {
      user: {
        name: '',
        email: '',
        points: '',
        userId: ''
      }

    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductHistory,
    OrderHistory
  },
  created () {
    this.user.name = sessionStorage.getItem('name')
    this.user.email = sessionStorage.getItem('email')
    this.user.points = sessionStorage.getItem('points')
    this.user.userId = sessionStorage.getItem('userId')
    console.log(this.user.userId)
    this.$store.dispatch('getOrderHistory', this.user.userId)
  },
  computed: { ...mapGetters(['allOrders']) }
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
    background-color: #5a5660;
    color:whitesmoke;
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
.main{
    margin-left: 150px;
    margin-top: 80px;
    margin-bottom: 45px;
}
.main-body{
  background-color:#E3E2DF;
}
.header {
    height: 30%;
    background: red;
    color: black;
    text-align: center;
}
.container {
    padding: 2px 16px;
}
</style>
