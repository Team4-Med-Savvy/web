<template>
<div>
  <Navbar/>
  <div class="container">
     <h1 class="text-center text-info py-3">Cart</h1>
     <table class="table center-content">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        <CartComponent/>
        <CartComponent/>
        <CartComponent/>
     </table>
     <div class="container center-content">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4"></div>
                <div class="col-4">
                    <H2>CART TOTAL</H2>
                    <table class="table cart-total-table" >
                       <tr>
                       <tr>
                        <td>Total</td>
                        <td id="total">Price</td>
                       </tr>
                    </table>
                    <button type="button" class="btn btn-success">BUY NOW</button>
                </div>
            </div>
      </div>
    </div>
<div class="pt-5"><Footer/></div>
</div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import CartComponent from './CartComponent.vue'
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    CartComponent
  }
}
</script>
<style scoped>
.center-content{
    text-align: center;
}
</style>
