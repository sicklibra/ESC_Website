<!-- 
 Author: Josh Hodges
 CSCI215 section 1
 Purpose:
  This project exists to display the use of the Vue.js front end frameowork
  This site functions as a fully functional single page application website
  that includes an estimator that will accept the user input of linear footage
  and specialty cabinets and generate an estimated cost for the Job. 
  
  I certify this is entirely my own work. 
  
  -->

<script setup>
  
</script>

<template>
  <div class="home">    
      <h1>Welcome to Example Site Cabinetry</h1>
      <sub>Your escape key to the perfect at home retreat!</sub>
      <div id="imgbar">
        <img src="../../public/Images/cabinetimgs/bath/bathtub.jpg" alt="">
        <img src="../../public/Images/cabinetimgs/kitchen/elegantFarm.JPG" alt="">
        <img src="../../public/Images/cabinetimgs/kitchen/greenElegant.jpg" alt="">
      </div>
      <br>
      <h3>Hit the escape key on your cabinets.</h3>
      <p>At Example Site Cabinetry, we custom build your cabinets for your style, your home, your taste, your escape. <br> Customize your experience with unique colors, styles, and accessories designed to make your own home your escape to paradise. All of our cabinets are made taylored for you in our advanced facilities to ensure you have the best product you can get. To top it off, our courteous and professional team of installers will fit your vision into your home bringing your ideas into reality in a clean and professional environement.</p>
  </div>
</template>

<style scoped> 
#imgbar img{
  float: left;
  width: 32.5%;
  text-align: center;
  margin-left: 5px;
}
#imgbar{
  text-align: center;
  width: 100%;
  margin: auto;
}
</style>
