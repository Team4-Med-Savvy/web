<template>
    <tr class="center-content">
          <td><img src="@/assets/productimg.jpeg"></td>
          <td>Product Name</td>
          <td>Price</td>
          <td><button type="button" id="up" class="btn btn-secondary text-black" @click="up('10')">+</button>
            <input class="qty-value" id="myNumber" type="text" value="1">
            <button type="button" class="btn btn-secondary text-black" @click="down('0')">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" id="down" class="btn btn-danger text-black" @click="remove()" >Remove</button></td>
    </tr>
</template>
<script>
export default {
  name: 'cart',
  methods: {
    down (min) {
      document.getElementById('myNumber').value = parseInt(document.getElementById('myNumber').value) - 1
      if (document.getElementById('myNumber').value <= parseInt(min)) {
        document.getElementById('myNumber').value = min
      }
    },
    up (max) {
      document.getElementById('myNumber').value = parseInt(document.getElementById('myNumber').value) + 1
      if (document.getElementById('myNumber').value >= parseInt(max)) {
        document.getElementById('myNumber').value = max
      }
    },
    remove () {
      document.getElementById('myNumber').value = 0
    }
  }
}
</script>
<style scoped>
.center-content{
    text-align: center;
}
.qty-value {
    max-width: 40px;
}
</style>
