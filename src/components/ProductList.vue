<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="container text-center d-flex align-items-strech flex-wrap" >
            <product-item v-for="product in allProducts" :key="product.id" :product="product"/>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import ProductItem from './ProductItem.vue'
export default {
  name: 'ProductList',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductItem
  },
  computed: mapGetters(['allProducts']),
  created () {
    console.log('category -- ', this.$route.params.category)
    // let category = this.$route.params.category
    // this.$store.dispatch('getProducts', category)
  }
}
</script>
<style scoped>

</style>
