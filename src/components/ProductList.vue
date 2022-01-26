<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
<<<<<<< HEAD
        <div class="container text-center d-flex align-items-strech flex-wrap">
            <product-item v-for="product in allProducts" :key="product.id" :product="product"/>
=======
        <div class="container">
            <div class="row text-center py-5">
                <ProductItem />
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        <div class="row text-center py-5">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
>>>>>>> b3e64ed67dabf559f417d33bf6b95d43e70be925
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
