<script setup>
import { ref, vModelCheckbox } from 'vue';
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
  const bathft=ref(0);
  const kitft=ref(0);
  const closetft=ref(0);
  const islft=ref(0);
  const kitupft=ref(0);
  const islbk=ref();
  const total= 0;
  
  const hood=ref(false);
  const drbx=70;
  const drprice= ref( fronts.tw10.doorprice);
  const drwprice= ref( fronts.tw10.drawerprice);
  
  // const islbksel=()=>{islbk==false ? islbk=true : islbk=false;}
    const faceSelect=ref(fronts.tw10.pic);
    const calcprice=()=>{
        alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');


    }
    const show=(e)=>{
      var targ=e.target;
      var img=fronts.pic;
      var newbox= document.createElement('img')
      newbox.src=img;
      newbox.id=hovdisp;
      document.targ.appendChild(newbox);
    }
    const unshow=(e)=>{
      var targ=e.target;
      document.targ.removeChild(firstElementChild);
    }
</script>

<template>
  <div class="estimator">    
    <h1>Estimator</h1>
    <p>an educated guess</p>
    <div id="doorsel">
      <h3>Lets pick a door from<br>some basic door styles!</h3>
      <select  name="door" id="door">
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="tw10">Tw-10</option>
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="crp10">CRP10</option>
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="tenrc">10rc</option>
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="tensq">10Sq</option>
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="aspen">Aspen</option>
        <option v-on:mouseover="show(event)" v-on:mouseout="unshow(event)" id="savannah">SavannahMT</option>
      </select>
      <img :src='faceSelect' alt=""height='150px'>
    </div>
    <form @submit.prevent="calcprice">
      <label for="kitft">Kitchen linear footage</label>
      <input type="number" id="kitft" name="kitft" v-model="kitft">
      <label for="kitupft">Kitchen upper cabinet linear footage</label>
      <input type="number" id="kitupft" name="kitupft" v-model="kitupft">
      <label for="islft">Kitchen island linear footage</label>
      <input type="number" name="islft" id="islft" v-model="islft">
      <label for="backcab">Cabinets on back of island</label>
      <input type="checkbox" name="backcab" id="backcab" v-model="islbk">
      <label for="bathft">Bath Vanity linear footage</label>
      <input type='number' id="bathft" name="bathft" v-model="bathft">
      <label for="closetft">Closet linear footage</label>
      <input type="number" id="closetft" name="closetft" v-model="closetft">
      <button v-on:submit="calcprice">submit</button>

    </form>
  </div>
</template>

<style scoped>
#hovdisp {
  float:right;
}
</style>