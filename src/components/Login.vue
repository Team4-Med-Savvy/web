<template>
  <div id="App" class="main-body">
    <div><Navbar /></div>
    <div><SubNavBar /></div>
      <div class="container py-5">
        <div class="d-flex justify-content-center">
          <div class="col-md-5">
            <div class="card rounded-0 shadow">
              <div class="card-body">
                <h3 class="h3class">Log in</h3>
                <form @submit="postData" method="post">
                  <div class="form-group">
                    <div style="margin-bottom:10px" id="data"><label>Email address:</label></div>
                    <input type="email" class="form-control" placeholder="Enter email" required v-model="posts.username"/>
                  </div>
                  <div class="form-group">
                    <div style="margin-bottom:10px" id="data"><label>Password: </label></div>
                    <input type="password" class="form-control" placeholder="Enter Password" required v-model="posts.password"/>
                  </div>
                  <!-- <div class="form-group">
                     <div style="margin-bottom:10px"><label>Confirm Password:</label></div>
                    <input type="password" class="form-control" placeholder="Re Enter Password" required/>
                  </div> -->
                  <div class="submit-button">
                    <button type="submit" class="btn btn-secondary" id="button">Log in</button>
                  </div>
                  <hr />
                  <div style="text-align:center">or</div>
                  <hr/>
                  <div class="submit-button">
                    <button class="btn btn-secondary" id="button" @click="login()">
                      <img src="@/assets/google.png" />&nbsp;&nbsp;Login with Google
                    </button>
                  </div>
                  <div>
                    <hr />
                    <div style="text-align:center">
                      <span class="text">New to MedSavvy ?</span>
                    </div>
                    <a class="nav-item nav-link text-dark h6 mx-3 my-auto text-center" id="register-button" href="/#/signup"><i class="fas fa-hand-point-right"></i> Create A New MedSavvy Account
</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div><Footer /></div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import SubNavBar from '@/components/SubNavbar'
import Footer from '@/components/Footer'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert'
Vue.use(VueAxios, axios)
export default {
  name: 'App',
  data () {
    return {
      isLogin: false,
      posts: {
        'username': null,
        'password': null
      }
    }
  },
  methods: {
    async login () {
      const googleUser = await this.$gAuth.signIn()
      console.log('googleUser', googleUser)
      console.log('getId', googleUser.getId())
      console.log('getBaseProfile', googleUser.getBasicProfile())
      console.log('getAuthResponse', googleUser.getAuthResponse())
      console.log('getAuthResponse$G', this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse())
      this.isLogin = this.$gAuth.isAuthorized
    },
    postData (e) {
      this.axios.post('http://localhost:8183/user/authenticate', this.posts)
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token)
          sessionStorage.setItem('name', result.data.name)
          sessionStorage.setItem('email', result.data.email)
          sessionStorage.setItem('points', result.data.points)
          sessionStorage.setItem('userId', result.data.id)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.message)
          // return alert('Invalid Email/Password')
          return swal('', 'Invalid Email/Password', 'error')
        })
      e.preventDefault()
    }
  },
  components: {
    Navbar,
    SubNavBar,
    Footer
  }
}
</script>

<style scoped>
.submit-button {
  margin-top: 10px;
  text-align: center;
}
.h3class {
  text-align: center;
  color: #9a1750;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.form-group {
  margin-bottom: 20px;
}
a{
  margin-left: 200px;
}
#data{
  color: #ee4c7c;
}
.main-body{
  background-color:#E3E2DF;
}
#button{
  background-color: #9a1750;
  color: #E3E2DF;
}
hr{
  color: #ee4c7c;
}
.text{
  color: #ee4c7c;
}
a{
  font-weight: bold;
  font-style: italic;
}

</style>
