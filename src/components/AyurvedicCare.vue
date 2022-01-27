<template>
    <div>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <!-- <div class="container text-center d-flex align-items-strech flex-wrap" v-for="product in allProducts" :key="product.id" :product="product">
            <product-item/>
        </div> -->
        <div class="container grid">
            <div class="row text-center py-5" v-for="product in allProducts" :key="product.id" :product="product">
              <div v-if="product.category == 'Ayurvedic_care'">
                <div class="product">
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h5>{{product.title}}</h5></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">{{product.price | currency}}</div>
                        <div><button type="button" class="btn btn-success mt-2 py-1">{{product.category}}</button></div>
                    </div>
                    <!-- <a href="/#/product" class="stretched-link"></a> -->
                    <router-link :to="{name: 'ProductDescription', params: {id: product.id}}" class="stretched-link"></router-link>
                 </div>
                 </div>
            </div>
        </div>
        </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import ProductItem from './ProductItem.vue'
export default {
  name: 'AyurvedicCare',
  filters: {
    currency: function (value) {
      return '₹ ' + parseFloat(value).toFixed(2)
    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer,
    ProductItem
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: mapGetters(['allProducts']),
  created () {
    this.getProducts()
  }
}
</script>
<style scoped>
.grid{
  width: 100%;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.product{
  width:350px;
}
</style>
