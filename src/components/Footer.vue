<template>
  <div>
    <footer>
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
      <div class="container-fluid text-center" style="background-color: #9a1750">
          <div class="row pt-5" style="background-color: #9a1750;">
                <div class="col-12 col-md-4 pb-5">
                    <p class=" font-weight-bold pb-3 h5 d-block" id="heading">MEDSAVVY</p>
                    <p class=" font-weight-bold pb-3 d-block">We are offering Helath Care Services of Five different Categories</p>
                </div>
                <div class="col-12 col-md-4 pb-5">
                    <p class=" font-weight-bold pb-3 h5 d-block" id="heading">USEFUL LINKS</p>
                    <a href="https://www.w3schools.com/css/" class=" font-weight-bold pb-3 d-block">Refer CSS Here</a>
                    <a href="https://getbootstrap.com/" class=" font-weight-bold pb-3 d-block"> Refer BootStrap Here</a>
                    <a href="https://vuejs.org/" class=" font-weight-bold pb-3 d-block">Refer VueJs Here</a>
                </div>
                <div class="col-12 col-md-4 pb-5">
                  <p class=" font-weight-bold pb-3 h5 d-block" id="heading">SOURCE CODE</p>
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
