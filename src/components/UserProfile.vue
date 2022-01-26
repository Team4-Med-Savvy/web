<template>
    <div class="cont">
        <div class="form sign-in">
          <!-- <img src="data:image/jpeg;base64,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" alt="login" height="100px" > -->
          <h2>Whatsup bitch!!!</h2>
          <div class="twice">
              <div class="left">
                  <div class="l1" style="height: 100px" >
                      <h5>Name:</h5>
                      <p id="username">Gandhi boi</p>
                  </div>
                  <div class="l1" style="height: 100px" >
                      <h5>Email:</h5>
                      <p id="useremail"> gandhihatesgodse@gmail.com</p>
                  </div>
                  <div class="l1"  style="height: 130px">
                       <h5>Rating:</h5>
                       <p id="useraddress">Swarg</p>
                  </div>
                  <div class="l1"  style="height: 130px">
                       <h5>Membership</h5>
                       <p id="useraddress">Gold</p>
                  </div>
                </div>
     <div class="right">
         <button class="submit" type="button" @click="gotomycart()">MY CART</button>
         <button class="submit" type="button" @click="gotomyorder()">MY ORDERS</button>
     </div>
          </div>
        </div>
    </div>
</template>
<style scoped>
*, *:before, *:after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
}
body{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(left, #b8bbfc, #272727);
  font-family: 'Nunito', sans-serif;
}
input, button{
  border:none;
  outline: none;
  background: none;
}
.cont{
  overflow: hidden;
  position: relative;
  width: 650px;
  height: 650px;
  background: -webkit-linear-gradient(left, #f7fcfc, #a3d1e4);
  box-shadow: 0 19px 38px rgba(17, 3, 100, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin-left:400px;
  margin-right:450px;
  border:5px solid purple;
}
.form{
  position: relative;
  width: 640px;
  height: 100%;
  padding: 50px 30px;
  -webkit-transition:-webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
  margin-top: -50px;
  margin-bottom: 50px;

}
h2{
  width: 100%;
  font-size: 30px;
  text-align: center;
   font-family: Arial, Helvetica, sans-serif;
   color: rgb(28, 133, 7);

}
label{
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}
label span{
  font-size: 14px;
  font-weight: 600;
  color: #505f75;
  text-transform: uppercase;
}
input{
  display: block;
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(109, 93, 93, 0.4);
  text-align: center;
  font-family: 'Nunito', sans-serif;
}
button{
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}
.submit{
  margin-top: 40px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  background: -webkit-linear-gradient(left, #c7c9ff, #474747);
}
.submit:hover{
  background: -webkit-linear-gradient(left, #b224ef, #7579ff);
}
.forgot-pass{
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #0c0101;
  cursor: pointer;
}
.forgot-pass:hover{
  color: red;
}
.social-media{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.social-media ul{
  list-style: none;
}
.social-media ul li{
  display: inline-block;
  cursor: pointer;
  margin: 25px 15px;
}
.social-media img{
  width: 40px;
  height: 40px;
}
.sub-cont{
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  -webkit-transition: -webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out;
}
.cont.s-signup .sub-cont{
  -webkit-transform:translate3d(-640px, 0, 0);
          transform:translate3d(-640px, 0, 0);
}
.img{
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
}
.cont.s-signup .img:before{
  -webkit-transform:translate3d(640px, 0, 0);
          transform:translate3d(640px, 0, 0);
}
.img-text{
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  -webkit-transition:-webkit-transform 1.2s ease-in-out;
  transition: -webkit-transform 1.2s ease-in-out;
  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
}
.img-text h2{
  margin-bottom: 10px;
  font-weight: normal;
}
.img-text p{
  font-size: 14px;
  line-height: 1.5;
}
.cont.s-signup .img-text.m-up{
  -webkit-transform:translateX(520px);
          transform:translateX(520px);
}
.img-text.m-in{
  -webkit-transform:translateX(-520px);
          transform:translateX(-520px);
}
.cont.s-signup .img-text.m-in{
  -webkit-transform:translateX(0);
          transform:translateX(0);
}
.sign-in{
  padding-top: 65px;
  -webkit-transition-timing-function:ease-out;
          transition-timing-function:ease-out;
}
.cont.s-signup .sign-in{
  -webkit-transition-timing-function:ease-in-out;
          transition-timing-function:ease-in-out;
  -webkit-transition-duration:1.2s;
          transition-duration:1.2s;
  -webkit-transform:translate3d(640px, 0, 0);
          transform:translate3d(640px, 0, 0);
}
.img-btn{
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}
.img-btn:after{
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}
.img-btn span{
  position: absolute;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack:center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-transition:-webkit-transform 1.2s;
  transition: -webkit-transform 1.2s;
  transition: transform 1.2s;
  transition: transform 1.2s, -webkit-transform 1.2s;;
}
.img-btn span.m-in{
  -webkit-transform:translateY(-72px);
          transform:translateY(-72px);
}
.cont.s-signup .img-btn span.m-in{
  -webkit-transform:translateY(0);
          transform:translateY(0);
}
.cont.s-signup .img-btn span.m-up{
  -webkit-transform:translateY(72px);
          transform:translateY(72px);
}
.sign-up{
  -webkit-transform:translate3d(-900px, 0, 0);
          transform:translate3d(-900px, 0, 0);
}
.cont.s-signup .sign-up{
  -webkit-transform:translate3d(0, 0, 0);
          transform:translate3d(0, 0, 0);
}
img{
    border-radius: 50%;
    margin-bottom: 30px;
}
.twice{
    padding-left:30px;
    margin-top: -15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left{
    float: left;
    height: 500px;
    width:550px;
    margin-top:30px;
    margin-right:50px;
    border: 2px;
    border:5px double purple;
    flex-direction: column;

}
.right{
    float: right;
    justify-content: space-between;
    flex-direction: column;
    align-self: flex-start;

}
.l1.l1{
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    color: purple;
    border:2px dotted rebeccapurple;
    width: 90%;
    text-align: left;
}
p{
    font: 1em sans-serif;
    font-family: cursive;
    color: blue;
}
</style>
<script>
export default{
  name: 'myprofile'
}
</script>
