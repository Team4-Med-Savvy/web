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
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full name">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter Email">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Password:</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter Password">
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Confirm Password:</label>
                                        <input type="password" class="form-control" placeholder="Enter Password">
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
export default {
  name: 'navigation-bar',
  components: {
    Navbar,
    SubNavbar,
    Footer
  }
}
</script>
