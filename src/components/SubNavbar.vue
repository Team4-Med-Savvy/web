<template>
    <div class="subnav-bar">
        <div class="category-image">
            <div @click="goproductlist('Covid essentials')"><img src="@/assets/category_image/covid_essentials.jpeg" alt=""></div>
            <p>Covid Essentials</p>
        </div>
        <div class="category-image">
            <div @click="goproductlist('Ayurvedic care')"><img src="@/assets/category_image/ayurvedic_care.jpeg" alt=""></div>
            <p>Ayurvedic Care</p>
        </div>
        <div class="category-image">
            <div @click="goproductlist('Surgical')"><img src="@/assets/category_image/surgicals.jpeg" alt=""></div>
            <p>Surgicals</p>
        </div>
        <div class="category-image">
            <div @click="goproductlist('Skin care')"><img src="@/assets/category_image/skin_care.jpeg" alt=""></div>
            <p>Skin Care</p>
        </div>
        <div class="category-image">
            <div @click="goproductlist('Personal care')"><img src="@/assets/category_image/personal_care.jpeg" alt=""></div>
            <p>Personal Care</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SubNavbar',
  methods: {
    goproductlist (category) {
      this.$router.push('/product/findlist/' + category)
      let categ = this.$route.params.category
      this.$store.dispatch('getProducts', categ)
      console.log(this.$router)
    }
  }
}
</script>
<style scoped>
img{
    border-radius: 50%;
    height: 75px;
    width: 75px;
    border: 3px solid black;
}
p{
    margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
    font-family:Georgia, 'Times New Roman', Times, serif
}
.subnav-bar{
    display: flex;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 75px;
}
.category-image{
    cursor: pointer;
}
</style>
