<template>
  <div class="d-flex align-items-center light-blue-gradient" style="height: 700px;">
<div class="container" >
<div class="d-flex justify-content-center">
<div class="col-md-5">
<div class="card rounded-0 shadow">
<div class="card-body">
<h3 class="h3class">Log in</h3>
<form>
<div class="form-group">
<label for="exampleInputEmail1">Email address:</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>
<div class="form-group">
<label for="exampleInputPassword1">Password: </label>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="form-group">
<label for="exampleInputPassword1">Confirm Password:</label>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
</div>
<div class="submit-button">
  <b-button type="submit" variant="outline-dark">Log in</b-button>
</div>
<RuleBox>
<Hr /> <div style="text-align:center">or</div> <Hr />
</RuleBox>
<div class="submit-button">
  <button variant="outline-dark">
  <img src="@/assets/google.png" /> Login with Google
</button>
</div>

</form>
</div>
</div>
</div>
</div>
</div>
</div>

</template>
<style scoped>
.submit-button{
  margin-top: 10px;
  text-align:center;
}
.h3class{
  text-align: center;
}
.form-group{
  margin-bottom: 20px;
}
</style>
