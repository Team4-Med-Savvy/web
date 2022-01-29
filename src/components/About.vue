<template>
  <div class="main-body">
    <div>
      <Navbar/>
    </div>
    <div class="subnav-bar">
      <SubNavbar/>
    </div>
    <div class="content-area">
      <div class="content">
        <h1>About Us</h1>
        <p>MedSavvy. We help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. You can buy and send medicines from any corner of the country - with just a few clicks of the mouse. At MedSavvy, we make a wide range of prescription medicines and other health products conveniently available all across India. We not only provide you with a wide range of medicines listed under various categories, we also offer a wide choice of OTC products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products and surgical supplies.</p>
      </div>
      <div class="content-image">
        <img src="@/assets/logo2.png" class="company-logo" alt="" height="250px" width="300px">
      </div>
    </div>
    <div class="namelist-2">
      <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
    <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
    <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
    </div>
    <div class="namelist-1">
      <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
    <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
    <div class="container">
      <img src="@/assets/gandhi.jpeg" alt="Avatar" class="image" height="50px" width="50px">
      <div class="middle">
        <div class="text">Gandhi</div>
      </div>
    </div>
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
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
<style scoped>
h1{
  color: #9a1750;
  font-weight: bold;
  font-style: italic;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
p{
  color: #ee4c7c;
}
.company-logo{
  border-radius: 5%;
}
.content-area{
  margin:50px;
  display: flex;
  justify-content: space-between;
  height: 150px;
}
.content{
  margin-left: 150px;
  width: 600px;
  margin-bottom:150px;
}
.content-image{
  margin-right: 150px;
}
.container {
  position: relative;
  width: 25%;
}

.image {
  opacity: 1;
  display: block;
  width: 50%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
  border-radius: 50%;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 35%;
  left: 20%;
  transform: translate(-35%, -20%);
  -ms-transform: translate(-35%, -20%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #5D001E;
  color: #e3e2df;
  font-size: 12px;
  padding: 16px 32px;
  border-radius: 10px;
}
.namelist-1{
  padding-left:100px;
  display: flex;
  justify-content: space-between;
}
.namelist-2{
  padding-left:100px;
  display: flex;
  justify-content: space-between;
  margin-bottom:30px;
  margin-top:150px;
}

.namelist-1{
  padding-left:100px;
  display: flex;
  justify-content: space-between;

}

.footer{
  margin-top: 100px;
}
.main-body{
    background-color:#E3E2DF;
}
</style>
