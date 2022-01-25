<template>
        <div class="col-12 col-md-3">
                <div class="card shadow h-100">
                  <img class="card-img-top img-fluid" src="@/assets/covidessentials.jpeg" alt="carrot" height="200px">
                    <div class="card-body">
                        <div class="card-title" ><h5>Title</h5></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">Price</div>
                    </div>
                    <div @click="onproduct" class="stretched-link"></div>
                </div>
        </div>
</template>
<script>
export default {
  name: 'ProductItem',
  methods: {
    onproduct () {
      this.$router.push('/product')
      console.log(this.$router)
    }
  }
}
</script>
<style scoped>
.stretched-link{
  cursor:pointer;
}
</style>
