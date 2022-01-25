<template>
  <div class="main-body">
    <div>
      <Navbar />
    </div>
    <div>
      <SubNavBar />
    </div>
    <div
      class="d-flex align-items-center light-blue-gradient"
      style="height: 700px;"
    >
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="col-md-5">
            <div class="card rounded-0 shadow">
              <div class="card-body">
                <h3 class="h3class">Log in</h3>
                <form>
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label for="exampleInputEmail1">Email address:</label></div>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      v-model="loginForm.email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label for="exampleInputPassword1">Password: </label></div>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      v-model="loginForm.password"
                      required
                    />
                  </div>
                  <!-- <div class="form-group">
                     <div style="margin-bottom:10px"><label for="exampleInputPassword1">Confirm Password:</label></div>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div> -->
                  <div class="submit-button">
                    <b-button type="submit" variant="outline-dark" v-on:click="getLogin"
                      >Log in</b-button
                    >
                  </div>
                  <hr>
                  <div class="submit-button">
                    <button variant="outline-dark">
                      <img src="@/assets/google.png" /> Login with Google
                    </button>
                  </div>
                  <div>
                    <div>
                    <hr>
                    <div style="text-align:center">
                      <span>New to MedSavvy ?</span>
                    </div>
                    <a class="nav-item nav-link text-dark h6 mx-3 my-auto" id="register-button" href="/#/signup" style="text-align:center">Create A New MedSavvy Account</a>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import SubNavBar from '@/components/SubNavbar'
import Footer from '@/components/Footer'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: null,
        password: null
      }
    }
  },
  components: {
    Navbar,
    SubNavBar,
    Footer},
  methods: {
    getLogin () {
      console.log('Logged in', this.loginForm)
    }
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
}
.form-group {
  margin-bottom: 20px;
}
a{
  margin-left: 200px;
}
</style>
