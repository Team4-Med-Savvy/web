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
                    img-width="500"
                    img-height="200"
                >
                    <b-carousel-slide
                    caption="Covid Essentials"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://arcatron.com/wp-content/uploads/2020/06/Post-Lockdown-Shopping-List-for-Essential-Covid-19-Products2.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Ayurvedic Care"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtq5dxQ4l9yZgawoQOtcnNHsNiPZQXvR_0w&usqp=CAU"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Third Slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Fourth Slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Fifth Slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                </b-carousel>
                </div>
        </div>
        <div>
            <h2 class="recommendations-title">Recommendations</h2>
        </div>
        <div>
            <Recommendation/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import Recommendation from './Recommendation.vue'
export default {
  name: 'about',
  components: {
    Navbar,
    SubNavbar,
    Footer,
    Recommendation
  }
}
</script>
<style scoped>
.main-carousel{
    margin-top:45px;
    margin-left:100px;
    margin-right:100px
}
.footer{
    margin-top:150px;
}
.recommendations-title{
    margin-left:100px;
    margin-top:25px;
}
</style>
