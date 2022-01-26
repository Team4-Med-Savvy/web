<template>
        <div class="col-12 col-md-3 my-3 px-2">
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h5>Title - {{product.title}}</h5></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">Price - {{product.price}}</div>
                        <div><button type="button" class="btn btn-success mt-2 py-1">More...</button></div>
                    </div>
                    <router-link :to="{name: 'ProductDescription', params: {id: product.id}}" class="stretched-link"></router-link>
                    <!-- <a href="/#/product" class="stretched-link"></a> -->
                </div>
        </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>
