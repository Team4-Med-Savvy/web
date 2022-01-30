<template>
    <div class="product-info">
        <span><img :src="i.imageUrl" alt="" height="140px" width="140px"></span>
        <div class="details px-5">
            <p>Product Name - {{i.name}} </p>
            <!-- <p>Amount - {{i.amount}}</p> -->
            <p>Quantity - {{i.quantity}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProductInfo',
  props: ['i']
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
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 50px;
}
h4{
    padding-bottom: 15px;
}
p{
    font-size: 20px;
}
.product-info{
    margin-left: 190px;
    margin-top: 60px;
    margin-bottom: 200px;
    background-color: lightpink;
}
</style>
