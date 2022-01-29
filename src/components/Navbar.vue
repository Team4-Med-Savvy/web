<template>
    <div class="main-navbar">
      <nav class="navbar navbar-expand-sm fixed-top">
        <div class="container my-2">
            <div class="navbar-brand text-dark font-weight-bold" id="home" @click="gohome()"><img src="@/assets/logo.jpeg" alt="" height="60px" width="60px"></div>
            <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span class="fas fa-bars text-dark"></span>
        </button>
            <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div class="navbar-nav"  >
                  <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search.." name="search" size="50">
                  <div>&nbsp;&nbsp;&nbsp;</div>
                  <button type="submit" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                  <b-nav-item class="nav-item nav-link h6 mx-3 my-auto" @click="goabout()">About</b-nav-item>
                  <!-- <b-nav-item class="nav-item nav-link h6 mx-3 my-auto" @click="goprofile()">Profile</b-nav-item> -->
                  <div @click="goprofile()" class="cart"><img src="@/assets/user.jpeg" alt="" height="50px" width="50px"></div>
                  <b-nav-item class="nav-item nav-link h6 mx-3 my-auto" v-if="isLoggedIn" @click="gologout()">Logout</b-nav-item>
                  <b-nav-item class="nav-item nav-link h6 mx-3 my-auto" v-else @click="gologin()">Login</b-nav-item>
                  <div @click="gocart(email)" class="cart"><img src="@/assets/cart.jpeg" alt="" height="50px" width="50px"></div>
              </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      email: ''
    }
  },
  created () {
    this.email = sessionStorage.getItem('email')
  },
  computed: {
    isLoggedIn () {
      return window.sessionStorage.getItem('email')
    }
  },
  methods: {
    goabout () {
      this.$router.push('/about')
      console.log(this.$router)
    },
    goprofile () {
      this.$router.push('/profile')
      console.log(this.$router)
    },
    gologin () {
      this.$router.push('/login')
      console.log(this.$router)
    },
    gohome () {
      this.$router.push('/')
      console.log(this.$router)
    },
    gocart (email) {
      console.log(email, 'cart navbar')
      if (!email) {
        console.log(email)
        this.$router.push('/empty')
      } else {
        this.$router.push('/cart/email/' + email)
        console.log(this.$router)
      }
    },
    gologout () {
      localStorage.removeItem('token')
      sessionStorage.removeItem('email')
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('points')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#home img{
  border-radius:5%;
}
.main-navbar{
    margin-bottom: 100px;
}
.cart{
  cursor: pointer;
}
#home{
  cursor: pointer;
}
.navbar{
background-color:#5D001E;
}
.cart img{
  border-radius:50%;
}
a.nav-link{
  color:#E3E2DF;
}
.user-image{
  border-radius: 50%;
}
.fas{
  color: whitesmoke;
}

</style>
