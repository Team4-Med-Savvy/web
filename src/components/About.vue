<template>
  <div>
      <nav class="navbar navbar-expand-sm fixed-top bg-light">
        <div class="container my-2">
            <a href="#" class="navbar-brand text-dark font-weight-bold">Jahnavi Vuyyuru</a>

            <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span class="fas fa-bars text-dark"></span>
        </button>

            <div class="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div class="navbar-nav"  >
                  <a href="#" class="nav-item nav-link text-dark h6 mx-3 my-auto">Home</a>
                  <a href="#skills" class="nav-item nav-link text-dark h6 mx-3 my-auto">Skills</a>
                  <a href="#certifications" class="nav-item nav-link text-dark h6 mx-3 my-auto">Certifications</a>
                  <a href="#about" class="nav-item nav-link text-dark h6 mx-3 my-auto">About</a>
                  <a href="#work" class="nav-item nav-link text-dark h6 mx-3 my-auto">Work</a>
                  <a href="#contact" class="nav-item nav-link text-dark h6 mx-3 my-auto">Contact</a>
                </div>
              </div>
        </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-body{
  background-color: #FAF0E6;
}
img{
  border-radius: 50%;
}
p{
  font-weight: 500;
  font-size: 12px;
}
.navbar{
  background-color: #D9D7F1;
  display: flex;
  justify-content: space-between;
}
.logo{
  margin-left: 10px;
  border-radius: 50%;
}
.searchbar{
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.search-button{
  border-radius: 25%;
}
.btn-group button {
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  margin-right: 10px;
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
  border-radius: 42px;
  border-width: 0;
  box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-family: Quicksand,sans-serif;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: .04em;
  line-height: 10px;
  margin: 0;
  padding: 18px 18px;
  text-align: center;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}
/* .btn-group:hover {
  background-image: linear-gradient(#B384C9, #391F5B 50%);
} */
.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
.cart-button{
  margin-right: 10px;
}
.sub-nav-bar{
  display: flex;
  justify-content: space-between;
  margin: 10px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
