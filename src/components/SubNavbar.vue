<template>
    <div class="subnav-bar">
        <div class="category-image">
            <a href="http://localhost:8081/?#/productlist"><img src="@/assets/category_image/covid_essentials.jpeg" alt=""></a>
            <p>Covid Essentials</p>
        </div>
        <div class="category-image">
            <a href="http://localhost:8081/?#/productlist"><img src="@/assets/category_image/ayurvedic_care.jpeg" alt=""></a>
            <p>Ayurvedic Care</p>
        </div>
        <div class="category-image">
            <a href="http://localhost:8081/?#/productlist"><img src="@/assets/category_image/surgicals.jpeg" alt=""></a>
            <p>Surgicals</p>
        </div>
        <div class="category-image">
            <a href="http://localhost:8081/?#/productlist"><img src="@/assets/category_image/skin_care.jpeg" alt=""></a>
            <p>Skin Care</p>
        </div>
        <div class="category-image">
            <a href="http://localhost:8081/?#/productlist"><img src="@/assets/category_image/personal_care.jpeg" alt=""></a>
            <p>Personal Care</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SubNavbar'
}
</script>
<style scoped>
img{
    border-radius: 50%;
    height: 75px;
    width: 75px;
    border: 3px solid black;
}
p{
    margin-top: 5px;
    font-weight: 500;
    font-size: 15px;
    font-family:Georgia, 'Times New Roman', Times, serif
}
.subnav-bar{
    display: flex;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 75px;
}
.category-image{
    cursor: pointer;
}
</style>
