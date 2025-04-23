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
import key from '@/assets/decor/key.png'
</script>

<template>
    <div id="hero">
<img id="left" v-bind:src="key" alt=""height='50px'>
<img id="right" v-bind:src="key" alt="" height="50px">
</div>
</template>

<style scoped>
#hero{
    margin: auto;
    display: block;
    max-width: 700px;

}
img{

    width: 48%;
    margin-top: 10px;
    margin-bottom: 10px;
}
#left{
    float:left;
}
#right{float: right;
transform: scaleX(-1);}


</style>