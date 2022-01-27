<template>
    <div>
    <h1 class="font-weight-light text-center my-3 pt-5 text-info" style="font-family: 'Trebuchet MS', sans-serif;">Try Other Merchants</h1>
    <div class="container scrollbar">
        <div class="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar" v-for="product in allProducts" :key="product.id">
            <div class="col-12 col-md-4">
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h4>Sanitizer</h4></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">Some Description</div>
                        <!-- <div><button type="button" class="btn btn-success mt-2">More...</button></div> -->
                    </div>
                    <a href="#" class="stretched-link"></a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Merchants',
  computed: mapGetters(['allProducts']),
  mounted () {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style scoped>
.scrollbar::-webkit-scrollbar{
            display: none;
        }
.container{
    margin-bottom:100px;
}
</style>
