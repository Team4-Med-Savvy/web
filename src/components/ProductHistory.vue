<template>
    <div class="product-history">
        <div class="image">
            <img src="@/assets/gandhi.jpeg" alt="" height="100px" width="100px">
        </div>
        <div class="details">
            <h4>Title</h4>
            <span>Price</span>
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
    justify-content: space-between;
}
.image{
    padding-left: 20px;
}
.details{
    padding-right: 1250px;
}
</style>
