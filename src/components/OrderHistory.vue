<template>
         <div>
                <div class="card shadow h-100">
                    <div class="card-body">
                        <div class="card-title py-3" >
                            <h4 class="px-5">Order ID : 1</h4>
                            <p class="px-5">Total amount : 150</p>
                        </div>
                        <div class="card-text text-center" style="font-family: Georgia, serif; font-size:20px">Time stamp : 2038-01-19 03:14:07</div>
                    </div>
                    <router-link :to="{name: 'ProductHistory'}" class="stretched-link"></router-link>
                    <!-- <a href="/#/product" class="stretched-link"></a> -->
                </div>
        </div>
</template>
<script>
export default{
  name: 'OrderHistory'
}
</script>
<style scoped>
.card-title{
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 30px;
}
p{
    font-family: fantasy;
    font-size: 20px;
}
h4{
    font-family: cursive;
}
.card-body{
    background: linear-gradient(to bottom left, #0099ff 0%, #ff99cc 100%);
}
</style>
