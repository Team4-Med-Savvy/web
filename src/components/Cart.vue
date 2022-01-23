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
        <tr>
          <td><img src="@/assets/covidessentials.jpeg"></td>
          <td>Product Name</td>
          <td>Price</td>
          <td><button type="button" class="btn btn-secondary text-black">+</button>
            <input class="qty-value" type="text" value="1">
            <button type="button" class="btn btn-secondary text-black">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" class="btn btn-danger text-black">Remove</button></td>
        </tr>
        <tr>
          <td><img src="@/assets/covidessentials.jpeg"></td>
          <td>Product Name</td>
          <td>Price</td>
          <td><button type="button" class="btn btn-secondary text-black">+</button>
            <input class="qty-value" type="text" value="1">
            <button type="button" class="btn btn-secondary text-black">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" class="btn btn-danger text-black">Remove</button></td>
        </tr>
        <tr>
          <td><img src="@/assets/covidessentials.jpeg"></td>
          <td>Product Name</td>
          <td>Price</td>
          <td><button type="button" class="btn btn-secondary text-black">+</button>
            <input class="qty-value" type="text" value="1">
            <button type="button" class="btn btn-secondary text-black">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" class="btn btn-danger text-black">Remove</button></td>
        </tr>
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
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
<style scoped>
.center-content{
    text-align: center;
}
.qty-value {
    max-width: 32pt;
}
</style>
