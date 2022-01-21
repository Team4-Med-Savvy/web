<template>
    <div>
        <div>
        <Navbar/>
    </div>
    <div>
        <SubNavbar/>
    </div>
    <div class="product-main">
        <div class="product-card">
            <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
            <b-row no-gutters>
            <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
            <b-card-body title="Covid Essentials">
            <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
            </b-card-text>
            </b-card-body>
            </b-col>
            </b-row>
            </b-card>
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
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.product-image{
    margin-left: 100px;
    border: black 4px solid;
}
.membership{
    display:flex;
    align-items: center;
    font-size: 20px;
}
.product-card{
    margin-left: 200px;
}

</style>
