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


<template>
  <div class="about">
    <div id="what">
      <img src="../../public/Images/cabinetimgs/kitchen/elegantFarm.JPG" alt="">
    <h1>About this Project</h1>
    <p>This project is an exercise in the functionality of <a href="https://www.vuejs.org">Vue.Js</a> front end framework. Though the style is rudementary, this exercise provided valuable experience in coordinating the following:</p>
    <ul>
      <li>Navigation within the app using single page view.</li>
      <li>Creating pieces such as the nav bar, footer, and hero image and mounting them to the app page</li>
      <li>Utilization of Javascript functions, objects, and variable bindings within the app. </li>
      <li>Scoped formatting relative to the segment of the page identified.</li>
      <li>Utilization of the hot reload features using CLI npm run dev to actively monitor changes.</li>
      <li>Identify and change blocks that allow for a combination of static and dynamic components.</li>
    </ul>    
  </div>

  <div id="thanks">
    <img src="../../public/Images/cabinetimgs/kitchen/stripegraniteLisl.JPG" alt="">
    <h2>Special Thanks</h2>
    <p>I would like to extend a special thank you to <a href="https://www.conestogawood.com/">Conestoga Woods</a> who's catalog and door images allowed me to give a more realistic feel and pricing for the Estimator and site. <br>
    I would also like to extend my most hearty thank you to Jay Miller with <a href="https://hwccustomcabinetry.com/">HWC Custom Cabinetry</a> for allowing me to use images from thier outstanding work for the galleries and cabinetry images used in this site. Without you, this would be a very bland project indeed.</p>
  </div>
  </div>
</template>

<style scoped>
ul{
  /* clear:both; */
  text-align: left;
  max-width: 70%;
}
li{
  margin-bottom: 10px;
}
p{
  /* max-width: 70%; */
}
#thanks{
  clear: both;
  display: block;
  width: 85%;
  text-align: center;
  /* margin-top: 150px; */
}
#thanks img{
  height: 200px;
  float: left;
  margin-top: 50px;
}
#what{
  width: 85%;
}
#what img{
  height: 200px;
  float: right;
}
.about{
  width: 100%;
  text-align: center;
  display: inline-block;
  }


</style>
