<template>
    <div class="main-navbar">
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
            <a href="http://localhost:8081/?#/" class="navbar-brand text-dark font-weight-bold"><img src="@/assets/logo.jpeg" alt="" height="50px" width="50px"></a>
            <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span class="fas fa-bars text-dark"></span>
        </button>
            <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div class="navbar-nav"  >
                  <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search.." name="search">
                  <button type="submit" class="btn btn-secondary"><i class="fa fa-search"></i></button>
                  <a href="http://localhost:8081/?#/about" class="nav-item nav-link text-dark h6 mx-3 my-auto">About</a>
                  <a href="http://localhost:8081/?#/login" class="nav-item nav-link text-dark h6 mx-3 my-auto">Login</a>
                  <a href="http://localhost:8081/?#/cart"><img src="@/assets/cart.jpeg" alt="" height="50px" width="50px"></a>
              </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
img{
    border-radius: 50%;
}
.main-navbar{
    margin-bottom: 100px;
}
</style>
