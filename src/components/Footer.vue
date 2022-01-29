<template>
  <div>
    <footer>
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
      <div class="container-fluid text-center" style="background-color: #9a1750">
          <div class="row pt-5" style="background-color: #9a1750;">
                <div class="col-12 col-md-6 pb-5">
                    <h3 class=" font-weight-bold pb-3 h5 d-block" id="heading">MEDSAVVY</h3>
                    <p class=" font-weight-bold pb-3 d-block">We are offering Helath Care Services of Five different Categories</p>
                </div>
                <div class="col-12 col-md-6 pb-5">
                  <h3 class=" font-weight-bold pb-3 h5 d-block" id="heading">SOURCE CODE</h3>
                  <a class="bg-white text-black fa-2x" href="https://github.com/Team4-Med-Savvy/web"><i class="fab fa-github"></i></a>
                </div>
            </div>
        <div class=" font-weight-bold py-1">
          <p>Copyright © Medsavvy 2022</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
footer{
  margin-top:50px;
}
p{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #e3e2df;
}
a{
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: #e3e2df;
}
#heading{
  color: black;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
