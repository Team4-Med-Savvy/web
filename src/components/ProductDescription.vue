<template>
    <div>
        <div>
        <Navbar/>
    </div>
    <div>
        <SubNavbar/>
    </div>
    <div class="product-main">
        <div class="product-image">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/cover4_new_1200x768.jpeg?1ddh2wMj.1sWvDuJNNtgqjyvpihWf3BZ&size=1200:675" alt="">
        </div>
        <div class="product-desc" v-for="product in allProducts" :key="product.id">
            <div class="title-desc">
                <h2 class="title">{{product.title}}</h2>
                <p class="description">{{product.description}}</p>
                <h2 class="pt-3">Rating</h2>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <br>
                <br>
                <button type="button" class="btn btn-info">
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
            <div class="price">
                <h2 class="price-tag">{{product.price | currency}}</h2>
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'about',
  filters: {
    currency: function (value) {
      return '₹ ' + parseFloat(value).toFixed(2)
    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
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
.product-main{
    padding: 50px 50px 50px 50px ;
    display: flex;
    justify-content: space-between;
    width: 1200px;
}
.product-image{
    border: black 4px solid;
}
.product-desc{
    padding-left: 70px;
    display: flex;
    justify-content: space-between;
}
.title{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.description{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#circle {
      width: 50px;
      height: 50px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 25px;
      background: rgb(165, 42, 42);
    }

.rating{
    margin-top: 2px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.price-tag{
    padding-top:10px;
    padding-left: 20px;
    color: gold;
    font-size: 25px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.container {
    margin-top: 30px;
    color: green;
}
.checked{
    color: teal;
}
h2{
    font-family: 'Times New Roman', Times, serif;
}
</style>
