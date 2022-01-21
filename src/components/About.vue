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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim incidunt minima, ratione iste veritatis voluptas, molestias facilis at sit quos dicta atque cupiditate architecto, magnam quaerat non accusamus modi adipisci?</p>
      </div>
      <div class="content-image">
        <img src="@/assets/logo.jpeg" alt="">
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
  </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar
  }
}
</script>
<style scoped>
img{
  border-radius: 50%;
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
  background-color: #000000;
  color: white;
  font-size: 12px;
  padding: 16px 32px;
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
</style>
