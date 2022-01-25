<template>
    <div class="product-history">
            <span><img src="@/assets/gandhi.jpeg" alt="" height="100px" width="100px"></span>
        <div class="details">
            <p>Product Name - </p>
            <p>Price - </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProductHistory'
}
</script>
<style scoped>
.product-history{
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
    padding-top: 7px;
    font-size: 20px;
}
</style>
