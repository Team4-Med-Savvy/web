<template>
    <div class="product-info">
        <span><img src="@/assets/gandhi.jpeg" alt="" height="140px" width="140px"></span>
        <div class="details">
            <p>Product Name - </p>
            <p>Price - </p>
            <p>Merchant Name - </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProductInfo'
}
</script>
<style scoped>
.product-info{
    height: 120px;
    display: flex;
}
span{
    padding-left: 50px;
}
.details{
    margin-left: 70px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
h4{
    padding-bottom: 15px;
}
p{
    font-size: 20px;
}
</style>
