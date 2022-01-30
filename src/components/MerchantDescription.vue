<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="row mt-5 pb-5 px-5">
          <div class="col-4">
            <img :src="productDescription.image" alt="" height="450px"  width="300px">
          </div>
          <div class="col-8">
            <h1>Product Title - {{productDescription.title}}</h1>
            <h3>Product price - {{productDescription.price}}</h3>
            <p>Product Description - {{productDescription.category}}</p>
            <h2 class="pt-3">Rating</h2>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <br><br>
            <button type="button" @click="clickCart()" class="btn btn-info">
                <span class="glyphicon> glyphicon-shopping-cart"></span>
                <i class="fas fa-shopping-cart"></i>
                <b> Add to Cart </b>
            </button>&nbsp;&nbsp;&nbsp;
            <!-- {{merchantList}} -->
            <!-- <b-dropdown id="dropdown-header" text="Try Other Merchants" class="m-2">
              <b-dropdown-item> <div v-for="merchant in merchantList.merchantProductDetailDtos" :key="merchant.id">Merchant: {{merchant.merchantId}}</div></b-dropdown-item>
              </b-dropdown> -->

              <select v-model="list">
                  <option v-for="merchant in merchantList.merchantProductDetailDtos" :key="merchant.id"> Merchant - {{merchant.merchantId}}</option>
              </select>
            </div>
          </div>
          <div><Footer/></div>
      </div>
</template>
<script>

import {mapGetters} from 'vuex'
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import Merchants from './Merchants.vue'
import swal from 'sweetalert'
export default {
  name: 'MerchantDescription',
  data () {
    return {
      email: null,
      currentUrl: null
    }
  },
  computed: {
    ...mapGetters(['merchantList'])},
  mounted () {
    // this.$store.dispatch('getProductDescription', this.id)
    console.log('hiiii', this.id)
    this.$store.dispatch('getMerchantList', this.id)
  },
  components: {
    Navbar,
    SubNavbar,
    Footer,
    Merchants
  },
  created () {
    this.email = sessionStorage.getItem('email')
    this.currentUrl = window.location.href
  },
  methods: {
    clickCart () {
      this.$store.dispatch('addToCart', {
        productDescription: this.productDescription,
        quantity: 1,
        email: this.email,
        currentUrl: this.currentUrl.split('/')[5]
      })
      swal('Congratulations', 'Item was added to your cart', 'success')
    }
  }
}
</script>
<style scoped>
.main-body{
  background-color:#E3E2DF;
}
</style>
