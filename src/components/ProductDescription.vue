<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
    <div class="row mt-5 pb-5 px-5" v-if="productDescription">
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

        </div>
        <Merchants/>
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
export default {
  name: 'ProductDescription',
  props: ['id'],
  data () {
    return {
      email: null,
      currentUrl: null
    }
  },
  computed: {
    ...mapGetters(['productDescription'])},
  mounted () {
    this.$store.dispatch('getProductDescription', this.id)
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
    }
  }
}
</script>
