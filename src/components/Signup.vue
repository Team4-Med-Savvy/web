<template>
    <div class="main-body">
      <link rel="stylesheet" href="css/style.css">
      <script src="js/index.js"></script>
        <div><Navbar/></div>
        <div><SubNavbar/></div>
            <div class="container py-5">
                <div class="d-flex justify-content-center">
                    <div class="col-md-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <h3 class="text-center" id="signup">Sign Up</h3>
                                <form @submit="postData" method="post">
                                    <div class="form-group">
                                        <label id="detail">Full Name: </label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full name" required v-model="posts.name">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email" required v-model="posts.email">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password" required v-model="posts.password">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label id="detail">Confirm Password:</label>
                                        <input type="password" class="form-control" placeholder="Re Enter Password" required>
                                    </div>
                                    <select multiple="multiple" id="myMulti">
                                      <option>CSS</option>
                                      <option>SCRIPT</option>
                                      <option>COM</option>
                                      <option>jQuery</option>
                                      <option>HTML5</option>
                                    </select>
                                    <div class="text-center">
                                        <button type="submit" class="btn mt-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
</template>
<script>
import Navbar from './Navbar'
import SubNavbar from './SubNavbar.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import axios from 'axios'
import swal from 'sweetalert'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'navigation-bar',
  data () {
    return {
      posts: {
        'name': null,
        'email': null,
        'password': null,
        'merchant': false,
        'points': 1000
      },
      prodl: {
        'email': sessionStorage.getItem('email'),
        'productList': []
      }
    }
  },
  methods: {
    postData (e) {
      this.axios.post('http://10.177.1.70:8183/user/register', this.posts)
        .then((result) => {
          console.warn(result)
          this.prodl.email = this.posts.email
          this.axios.post('http://10.177.1.70:8186/cart', this.prodl)
          swal('', 'Registeration Successful', 'success')
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err.message)
          return swal('', 'Email already registered', 'error')
        })
      e.preventDefault()
    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
<style scoped>
.main-body{
  background-color:#E3E2DF;
}
#signup{
  color: #9a1750;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.btn{
  background-color: #9a1750;
  color: #E3E2DF;

}
#detail{
  color: #ee4c7c;
}
#output {
  padding: 20px;
  background: #dadada;
}

form {
  margin-top: 20px;
}

select {
  width: 300px;
}
</style>
