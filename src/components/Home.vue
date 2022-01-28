<template>
    <div class="main-body">
        <div>
            <Navbar/>
        </div>
        <div>
            <SubNavbar/>
        </div>
        <div class="main-carousel">
            <div class="carousel">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade="true"
                    no-animation="false"
                    indicators
                    no-touch="false"
                >
                    <div @click="goproductlist()" class="clickclass"><b-carousel-slide
                    caption="Covid Essentials"
                    img-src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y292aWQlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    ></b-carousel-slide></div>
                    <div @click="goproductlist()" class="clickclass"><b-carousel-slide
                    caption="Ayurvedic Care"
                    img-src="https://media.istockphoto.com/photos/herbal-treatment-picture-id174676747?b=1&k=20&m=174676747&s=170667a&w=0&h=QKP8jnTgyYgojm4wiKpnk0jzXrvVSfWVpOGqJcOmQhc="
                    ></b-carousel-slide></div>
                    <div @click="goproductlist()" class="clickclass"><b-carousel-slide
                    caption="Surgicals"
                    img-src="https://media.istockphoto.com/photos/modern-operating-room-in-a-hospital-generated-digitally-picture-id1281627829?b=1&k=20&m=1281627829&s=170667a&w=0&h=Hm99xf7HqPEujo0zIyyLB1WqUhPLffNGi9IicfLoR1c="
                    ></b-carousel-slide></div>
                    <div @click="goproductlist()" class="clickclass"><b-carousel-slide
                    caption="Skin Care"
                    img-src="https://images.unsplash.com/photo-1631730486572-226d1f595b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80"
                    ></b-carousel-slide></div>
                   <div @click="goproductlist()" class="clickclass"><b-carousel-slide
                    caption="Personal Care"
                    img-src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    ></b-carousel-slide></div>
                </b-carousel>
                </div>
        </div>
        <div>
            <h1 class="font-weight-light text-center my-3 pt-5 text-info" style="font-family: 'Trebuchet MS', sans-serif;">Recommendations</h1>
            <div class="cover">
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
  methods: {
    goproductlist () {
      this.$router.push('/productlist')
      console.log(this.$router)
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
    margin-right:100px
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
</style>
