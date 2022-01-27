<template>
    <div>
        <div><div class="main-navbar">
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
            <div class="navbar-brand text-dark font-weight-bold" id="home" @click="gohome()"><img src="@/assets/logo.jpeg" alt="" height="50px" width="50px"></div>
            <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span class="fas fa-bars text-dark"></span>
        </button>
            <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div class="navbar-nav"  >
                  <input class="form-control my-0 py-1 amber-border" type="text" v-model="search" placeholder="Search.." name="search">
                  <button type="submit" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                  <b-nav-item class="nav-item nav-link text-dark h6 mx-3 my-auto" @click="goabout()">About</b-nav-item>
                  <b-nav-item class="nav-item nav-link text-dark h6 mx-3 my-auto" @click="goprofile()">Profile</b-nav-item>
                  <b-nav-item class="nav-item nav-link text-dark h6 mx-3 my-auto" @click="gologin()">Login</b-nav-item>
                  <div @click="gocart()" class="cart"><img src="@/assets/cart.jpeg" alt="" height="50px" width="50px"></div>
              </div>
        </div>
      </div>
    </nav>
    </div></div>
        <div><SubNavbar/></div>
             <div>
               <div class="container grid">
            <div class="row text-center py-5 " v-for="product in filteredProducts" :key="product.id" id="divclass">
                <div v-if="product.category == 'Covid_essential'">
                <div class="product">
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h5>{{product.title}}</h5></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">{{product.price | currency}}</div>
                        <div><button type="button" class="btn btn-success mt-2 py-1">{{product.category}}</button></div>
                    </div>
                    <a href="/#/product" class="stretched-link"></a>
                 </div>
                 </div>
                 </div>
        </div>
        </div>
    </div>
        <div><Footer/></div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
// import ProductItem from './ProductItem.vue'
export default {
  name: 'navigation-bar',
  data () {
    return {
      search: ''
    }
  },
  filters: {
    currency: function (value) {
      return '₹ ' + parseFloat(value).toFixed(2)
    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
    // ProductItem
  },
  methods: {
    ...mapActions(['getProducts']),
    goabout () {
      this.$router.push('/about')
      console.log(this.$router)
    },
    goprofile () {
      this.$router.push('/profile')
      console.log(this.$router)
    },
    gologin () {
      this.$router.push('/login')
      console.log(this.$router)
    },
    gohome () {
      this.$router.push('/')
      console.log(this.$router)
    },
    gocart () {
      this.$router.push('/cart')
      console.log(this.$router)
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    ...mapGetters(['allProducts']),
    filteredProducts () {
      return this.allProducts.filter(product => product.title.includes(this.search))
    }
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
img{
    border-radius: 50%;
}
.main-navbar{
    margin-bottom: 100px;
}
.cart{
  cursor: pointer;
}
#home{
  cursor: pointer;
}
</style>
