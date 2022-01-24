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
            <img src="https://pbs.twimg.com/profile_images/1054208422600687616/K0cVBGHp_400x400.jpg" alt="">
        </div>
        <div class="product-desc">
            <div class="title-desc">
                <h2 class="title">Covid Essentials</h2>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab sit doloribus, dolorum molestias excepturi possimus incidunt expedita, totam at a sapiente, corporis iure facere dolore. Sequi consectetur itaque saepe.</p>
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
                <h2 class="price-tag">Free</h2>
            </div>
        </div>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
export default {
  name: 'about',
  components: {
    Navbar,
    SubNavbar,
    Footer
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
