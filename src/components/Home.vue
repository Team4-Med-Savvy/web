<template>
    <div class="main-body">
        <div><Navbar/></div>
        <div><SubNavbar/></div>
        <div class="main-carousel">
            <div class="carousel">
                  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Covid Essentials"
        img-src="https://www.linkpicture.com/q/Covid_essential.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.linkpicture.com/q/Webp.net-resizeimage_47.jpg"
        caption="Ayurvedic Care">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://www.linkpicture.com/q/Webp.net-resizeimage-1_1.jpg"
      caption="Surgicals"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://www.linkpicture.com/q/Webp.net-resizeimage-3.jpg"
      caption="Skin Care"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://www.linkpicture.com/q/Webp.net-resizeimage-5_3.jpg"
      caption="Pet Care"
      ></b-carousel-slide>
    </b-carousel>

  </div>
                </div>
        </div>
        <div>
            <h1 class="my-3 pt-5" id="rec">Recommendations</h1>
            <div class="container pt-4 text-center d-flex flex-nowrap overflow-auto scrollbar">
            <recommendation v-for="recom in recommendations" :key="recom.id" :recom="recom"/>
            </div>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import Recommendation from './Recommendation.vue'
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    Recommendation
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    goproductlist () {
      this.$router.push('/productlist')
      console.log(this.$router)
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  mounted () {
    this.$store.dispatch('getRecommendations')
  },
  computed: mapGetters(['recommendations'])
}
</script>
<style scoped>
.main-carousel{
    margin-top:45px;
    margin-left:100px;
    margin-right:100px;
}
.footer{
    margin-top:75px;
}
.recommendations-title{
    margin-left:100px;
    margin-top:25px;
}
.clickclass{
    cursor:pointer;
    width: 100%;
  height: 200px;
}
.cover{
    display: flex;
}
.main-body{
    background-color:#E3E2DF;
}
#rec{
    font-family: 'Trebuchet MS', sans-serif;
    color:#EE4C7C;
    font-weight: lighter;
    text-align: center;
}
.scrollbar::-webkit-scrollbar
{
    display: none;
}
</style>
