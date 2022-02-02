<template>
<div class="main-body">
  <Navbar/>
  <div class="container">
     <h1 class="text-center text-info py-3" id="cart">Cart</h1>
     <table class="table center-content">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr class="center-content" v-for="item in cart.productList" :key="item.id">
          <td><img :src="item.image" height="100px" width="100px"></td>
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
          <td>
          <button type="button" id="down" @click="decrement(item.merchantId,item.quantity,item.productId,item.id, item.price)" class="btn btn-secondary text-black" >-</button>
            <span id='myNumber'>{{item.quantity}}</span>
            <button type="button" id="up" @click="increment(item.merchantId,item.quantity,item.productId,item.id, item.price)" class="btn btn-secondary text-black">+</button>
          </td>
          <td>{{productTotal(item.id, item.price, item.quantity)}}</td>
        </tr>
     </table>
     <div class="container center-content">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4 bg-secondary text-white py-4">
                    <H2>CART TOTAL</H2>
                    <table class="table cart-total-table text-white " >
                       <tr>
                       <tr>
                        <td>Total</td>
                        <td id="total">Price : {{cartTotalPrice}}</td>
                       </tr>
                    </table>
                    <button type="button" class="btn btn-success" @click="checkout(userId, date, cartTotalPrice, cart.productList)">Checkout</button>
                </div>
            </div>
      </div>
    </div>
<div class="pt-5"><Footer/></div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import swal from 'sweetalert'
export default {
  name: 'navigation-bar',
  data () {
    return {
      userId: '',
      date: ''

    }
  },
  computed: {
    ...mapGetters(['cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
  },
  created () {
    this.userId = sessionStorage.getItem('userId')
    console.log(this.userId)
    this.date = Date.now().toLocaleString()
    console.log('date', this.date)
    let cartEmail = this.$route.params.email
    console.log(cartEmail, 'created method')
    this.$store.dispatch('getCartItems', cartEmail)
  },
  methods: {
    increment (merchantId, quantity, productId, id, price) {
      let email = this.$route.params.email
      console.log(merchantId, quantity, productId, email, id, price)
      this.$store.dispatch('increment', {merchantId, quantity, productId, email, id, price})
    },
    decrement (merchantId, quantity, productId, id, price) {
      let email = this.$route.params.email
      console.log(merchantId, quantity, productId, email, id, price)
      this.$store.dispatch('decrement', {merchantId, quantity, productId, email, id, price})
    },
    sweetAlert () {
      this.$swal('Congratulations', 'Your order was placed successfully', 'OK')
    },
    checkout (userId, date, totalPrice, p) {
      this.$store.dispatch('checkout', {userId, date, totalPrice, p})
      console.log('price', totalPrice)
      console.log('date', date)
      swal('Congratulations', 'Your order was placed successfully!', 'success').then(
        value => {
          this.$route.push({name: 'EmptyCart'})
          // window.location.href = '#'
        }
      )
    },
    productTotal (id, price, quantity) {
      return price * quantity
    },
    types: ['vue-sweetalert2']
  }
}
</script>
<style scoped>
.center-content{
    text-align: center;
}
.qty-value {
    max-width: 40px;
}
th{
    color: rgb(238, 226, 226);
    background: rgb(243, 144, 114);
    font-size: 20px;
}
.main-body{
  background-color:#E3E2DF;
}
h1{
  color:#EE4C7C !important;
}
</style>
