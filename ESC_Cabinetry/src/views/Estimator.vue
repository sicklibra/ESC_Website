<script setup>
import { ref } from 'vue';
  import i10rc from '@/assets/doors/10rc.jpg';
  import i10sq from '@/assets/doors/10sq5.jpg';
  import iaspen from '@/assets/doors/aspen.png';
  import isavannah from '@/assets/doors/savannahMT.jpg';
  import itw10 from '@/assets/doors/tw10.jpg'
  import icrp10 from '@/assets/doors/crp10.png'
  const PPF={
    kitchen: 275,
    bath: 275,
    laundry: 200,
    closet: 400,
    island: 375,
  }
  const bathft=0
  const kitft=0
  const closetft=0
  const total=0;
  
  const hood=false;
  const drbx=70
  
    const fronts={
      tenrc:{
        doorprice: 17,
        drawerprice: 14,
        pic: i10rc,
      },
      tensq:{
        doorprice: 24,
        drawerprice: 24,
        pic: i10sq,
      },
      tw10:{
        doorprice: 14,
        drawerprice: 17,
        pic: itw10,
      },
      crp10:{
        doorprice: 17,
        drawerprice: 20,
        pic:icrp10,
      },
      aspen:{
        doorprice: 30,
        drawerprice: 33,
        pic: iaspen,
      },
      savannah:{
        doorprice: 27,
        drawerprice: 30,
        pic:isavannah,
      },
    }
    const faceSelect=fronts.tw10.pic;
    const calcprice=()=>{
        alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');
    }
</script>

<template>
  <div class="estimator">    
    <h1>Estimator</h1>
    <p>an educated guess</p>
    <div id="doorsel">
      <h3>Lets pick a door from<br>some basic door styles!</h3>
      <select  name="door" id="door">
        <option v-on:select="faceSelect=fronts.tw10.pic" value="tw10">Tw-10</option>
        <option v-on:select="faceSelect=fronts.crp10.pic" value="crp10">CRP10</option>
        <option value="10rc">10rc</option>
        <option value="10sq">10Sq</option>
        <option value="aspen">Aspen</option>
        <option value="savannah">SavannahMT</option>
      </select>
      <img v-bind:src='faceSelect' alt=""height=150px>
    </div>
    <form action="calcprice"></form>
  </div>
</template>