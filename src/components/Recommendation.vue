<template>
            <div class="col-12 col-md-3 ">
                <div class="card shadow h-100 item">
                  <img class="card-img-top img-fluid recomImg" :src="recom.image" alt="carrot">
                    <div class="card-body">
                        <div class="card-title" ><h4>Name- {{recom.title}}</h4></div>
                        <div class="card-text" style="font-family: 'Trebuchet MS', sans-serif;">₹ {{recom.price}}</div>
                    </div>
                    <a href="#" class="stretched-link"></a>
                </div>
            </div>
</template>
<script>
export default {
  name: 'Recommendation',
  props: ['recom']
}
</script>
<style scoped>
.scrollbar::-webkit-scrollbar{
    display: none;
}
.container{
    margin-bottom:100px;
    position: -webkit-sticky;
    position: sticky;
}
.item{
    width:300px;

}
.cover{
    align-items: center;
justify-content: center;
}
.recomImg{
    height: 200px;
}
</style>
