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
                <form>
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label>Email address:</label></div>
                    <input type="email" class="form-control" placeholder="Enter email" required/>
                  </div>
                  <div class="form-group">
                    <div style="margin-bottom:10px"><label>Password: </label></div>
                    <input type="password" class="form-control" placeholder="Enter Password" required/>
                  </div>
                  <div class="form-group">
                     <div style="margin-bottom:10px"><label>Confirm Password:</label></div>
                    <input type="password" class="form-control" placeholder="Re Enter Password" required/>
                  </div>
                  <div class="submit-button">
                    <button type="submit" class="btn btn-secondary">Log in</button>
                  </div>
                  <Hr />
                  <div style="text-align:center">or</div>
                  <Hr/>
                  <div class="submit-button">
                    <button class="btn btn-secondary" @click="login()">
                      <img src="@/assets/google.png" />&nbsp;&nbsp;Login with Google
                    </button>
                  </div>
                  <div>
                    <Hr />
                    <div style="text-align:center">
                      <span>New to MedSavvy ?</span>
                    </div>
                    <a class="nav-item nav-link text-dark h6 mx-3 my-auto text-center" id="register-button" href="/#/signup">Create A New MedSavvy Account</a>
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

export default {
  name: 'App',
  data () {
    return {
      isLogin: false
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
}
.form-group {
  margin-bottom: 20px;
}
a{
  margin-left: 200px;
}
</style>
