<template>
    <tr class="center-content">
          <td><img src="@/assets/productimg.jpeg"></td>
          <td>Product Name</td>
          <td>Price</td>
          <td><button type="button" class="btn btn-secondary text-black">+</button>
            <input class="qty-value" type="text" value="1">
            <button type="button" class="btn btn-secondary text-black">-</button>
          </td>
          <td>Total Price</td>
          <td><button type="button" class="btn btn-danger text-black">Remove</button></td>
    </tr>
</template>
<style scoped>
.center-content{
    text-align: center;
}
.qty-value {
    max-width: 40px;
}
</style>
