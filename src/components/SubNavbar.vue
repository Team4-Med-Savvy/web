<template>
    <div class="subnav-bar">
        <div class="category-image">
            <div @click="goproductcovid()"><img src="@/assets/category_image/covid_essentials.jpeg" alt=""></div>
            <p>Covid Essentials</p>
        </div>
        <div class="category-image">
            <div @click="goproductayur()"><img src="@/assets/category_image/ayurvedic_care.jpeg" alt=""></div>
            <p>Ayurvedic Care</p>
        </div>
        <div class="category-image">
            <div @click="goproductsurgicals()"><img src="@/assets/category_image/surgicals.jpeg" alt=""></div>
            <p>Surgicals</p>
        </div>
        <div class="category-image">
            <div @click="goproductskin()"><img src="@/assets/category_image/skin_care.jpeg" alt=""></div>
            <p>Skin Care</p>
        </div>
        <div class="category-image">
            <div @click="goproductpersonal()"><img src="@/assets/category_image/personal_care.jpeg" alt=""></div>
            <p>Personal Care</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SubNavbar',
  methods: {
    goproductcovid () {
      this.$router.push('/productlist')
      console.log(this.$router)
    },
    goproductayur () {
      this.$router.push('/ayurvediccare')
      console.log(this.$router)
    },
    goproductsurgicals () {
      this.$router.push('/surgicals')
      console.log(this.$router)
    },
    goproductskin () {
      this.$router.push('/skincare')
      console.log(this.$router)
    },
    goproductpersonal () {
      this.$router.push('/personal')
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
