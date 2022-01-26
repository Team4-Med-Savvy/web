<template>
    <div>
        <div><Navbar/></div>
            <div class="container py-5">
                <div class="d-flex justify-content-center">
                    <div class="col-md-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <h3 class="text-center">Sign Up</h3>
                                <form @submit="postData" method="post">
                                    <div class="form-group">
                                        <label>Full Name: </label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full name" required v-model="posts.name">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email" required v-model="posts.email">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password" required v-model="posts.password">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Confirm Password:</label>
                                        <input type="password" class="form-control" placeholder="Re Enter Password" required>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
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
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'signup',
  data () {
    return {
      posts: {
        'name': null,
        'email': null,
        'password': null,
        'merchant': false,
        'points': 0
      }
    }
  },
  methods: {
    postData (e) {
      this.axios.post('http://localhost:8081/user/register', this.posts)
        .then((result) => {
          console.warn(result)
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
