<template>
    <div class="main-navbar">
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
            <a href="#" class="navbar-brand text-dark font-weight-bold"><img src="@/assets/logo.jpeg" alt="" height="50px" width="50px"></a>
            <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span class="fas fa-bars text-dark"></span>
        </button>
            <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div class="navbar-nav"  >
                  <a href="#" class="nav-item nav-link text-dark h6 mx-3 my-auto">About</a>
                  <a href="#" class="nav-item nav-link text-dark h6 mx-3 my-auto">Login/Register</a>
                  <a href="#"><img src="@/assets/cart.jpeg" alt="" height="50px" width="50px"></a>
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
