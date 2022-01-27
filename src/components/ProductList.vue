<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="container text-center d-flex align-items-strech flex-wrap" >
            <product-item v-for="product in allProducts._embedded.products" :key="product.id" :product="product"/>
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
  mounted () {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style scoped>

</style>
