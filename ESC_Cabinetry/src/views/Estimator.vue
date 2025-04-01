<script setup>
import { ref } from 'vue';
    const kitcostPft = 300;
    const bathcostPft = 275;
    const laundcostPft= 200;
    const closetcostPft = 400;
    const bathft=0
    const kitft=0
    const closetft=0
    const total=0;
    const hood=false;
    // const door = {
    //   10rc:{
    //     doorprice: 17,
    //     drawerprice: 14,
    //   } ,
    //   10sq 
    //   '10sq 24 24', 'aspen 30 33', 'savannah 27 30', 'tw10 14 17','crp10 17 20'}
    // const drawerface=[]
    // const doorprice=[]
    const disclaimer=()=>{
        alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');
    }
</script>

<template>
  <div class="estimator">
    
    <h1>Estimator</h1>
    <p></p>
    <sub>What the hell is happening?</sub>
  </div>
</template>