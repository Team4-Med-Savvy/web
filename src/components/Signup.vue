<template>
    <div>
        <div><Navbar/></div>
            <div class="container py-5">
                <div class="d-flex justify-content-center">
                    <div class="col-md-5">
                        <div class="card shadow">
                            <div class="card-body">
                                <h3 class="text-center">Sign Up</h3>
                                <form>
                                    <div class="form-group">
                                        <label>Full Name: </label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full name" v-model="signupForm.fullname">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="signupForm.email">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password" v-model="signupForm.password">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Confirm Password:</label>
                                        <input type="password" class="form-control" placeholder="Re Enter Password" v-model="signupForm.confirmPassword">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary mt-3" v-on:click="signupuser">Submit</button>
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
export default {
  name: 'signup',
  data () {
    return {signupForm: {
      fullname: null,
      email: null,
      password: null,
      confirmPassword: null
    }}
  },
  methods: {
    signupuser () {
      console.warn('hi', this.signupForm)
    }
  },
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
