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
        <tr class="center-content" v-for="item in cart" :key="item.productDescription.id">
          <td><img src="@/assets/productimg.jpeg"></td>
          <td>Title - {{item.productDescription.title}}</td>
          <td>Price - {{item.productDescription.id}}</td>
          <td><button type="button" id="up" class="btn btn-secondary text-black" @click="up('10')">+</button>
            <span id='myNumber'>{{item.quantity}}</span>
            <!-- <input class="qty-value" id="myNumber" type="text" value="1"> -->
            <button type="button" class="btn btn-secondary text-black" @click="down('0')">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" id="down" class="btn btn-danger text-black">Remove</button></td>
        </tr>
     </table>
     <div class="container center-content">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4">
                    <H2>CART TOTAL</H2>
                    <table class="table cart-total-table" >
                       <tr>
                       <tr>
                        <td>Total</td>
                        <td id="total">Price : {{cartTotalPrice}}</td>
                       </tr>
                    </table>
                    <button type="button" class="btn btn-success">Checkout</button>
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
export default {
  name: 'navigation-bar',
  computed: {
    ...mapGetters(['cart']),
    ...mapGetters(['cartTotalPrice'])
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
  },
  methods: {
    down (min) {
      document.getElementById('myNumber').value = parseInt(document.getElementById('myNumber').value) - 1
      if (document.getElementById('myNumber').value <= parseInt(min)) {
        document.getElementById('myNumber').value = min
      }
    },
    up (max) {
      document.getElementById('myNumber').value = parseInt(document.getElementById('myNumber').value) + 1
      if (document.getElementById('myNumber').value >= parseInt(max)) {
        document.getElementById('myNumber').value = max
      }
    }
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
</style>
