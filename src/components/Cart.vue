<template>
<div>
  <Navbar/>
  <div class="container">
     <h1 class="text-center text-info py-3">Cart</h1>
     <table class="table center-content">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        <tr class="center-content" v-for="item in cart" :key="item.productDescription._links.self.href.split('/')[4]">
          <td><img :src="item.productDescription.image" height="100px" width="100px"></td>
          <td>Title - {{item.productDescription.title}} - {{item.productDescription.completed}}</td>
          <td>Price - {{item.productDescription.price}}</td>
          <td><button type="button" id="up" class="btn btn-secondary text-black" @click="increment(item.productDescription,item.quantity)">+</button>
            <span id='myNumber'>{{item.quantity}}</span>
            <!-- <input class="qty-value" id="myNumber" type="text" value="1"> -->
            <button type="button" id="down" class="btn btn-secondary text-black" @click="decrement(item.productDescription,item.quantity)">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" @click.prevent="removeProduct(item.productDescription)" class="btn btn-danger text-black">Remove</button></td>
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
                    <button type="button" class="btn btn-success" @click="checkout()">Checkout</button>
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
      email: null,
      currentUrl: null
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
    this.email = sessionStorage.getItem('email')
    this.currentUrl = window.location.href
    console.log(this.currentUrl, 'hi')
  },
  mounted () {
    this.$store.dispatch('getCartItems')
  },
  methods: {
    removeProduct (productDescription) {
      this.$store.dispatch('removeProduct', productDescription)
    },
    increment (productDescription, quantity, email, currentUrl) {
      console.log(this.currentUrl.split('/')[5], 'heelo')
      this.$store.dispatch('increment', {productDescription, quantity, email, currentUrl})
    },
    decrement (productDescription, quantity) {
      this.$store.dispatch('decrement', {productDescription, quantity})
    },
    sweetAlert () {
      this.$swal('Congratulations', 'Your order was placed successfully', 'OK')
    },
    checkout () {
      swal('Congratulations', 'Your order was placed successfully!', 'success').then(
        value => {
          window.location.href = '/cart'
        }
      )
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

</style>
