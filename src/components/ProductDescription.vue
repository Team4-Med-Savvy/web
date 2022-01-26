<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
    <div class="row mt-5 pb-5 px-5" v-if="productDescription">
        <div class="col-4">
            <img src="https://pbs.twimg.com/profile_images/1054208422600687616/K0cVBGHp_400x400.jpg" alt="">
        </div>
        <div class="col-8">
            <h1>Product Title - {{productDescription.title}}</h1>
            <h3>Product price - {{productDescription.completed}}</h3>
            <p>Product Description - {{productDescription.title}}</p>
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
            <button type="button"
                class="btn btn-success">
                <span class="glyphicon>glyphicon-shopping-cart"></span>
                <b> Buy Now </b>
            </button>

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
export default {
  name: 'ProductDescription',
  props: ['id'],
  computed: mapGetters(['productDescription']),
  mounted () {
    // let id = this.$route.params.id
    this.$store.dispatch('getProductDescription', this.id)
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
  },
  methods: {
    clickCart () {
      console.log('Hi')
      this.$store.dispatch('addToCart', {
        productDescription: this.productDescription,
        quantity: 1
      })
    }
  }
}
</script>
