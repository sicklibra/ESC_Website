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
  //obj fronts contains all available door and drawer front info.
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
  //footage acquired by form for calculation
  const bathft=ref(0); // bathroom vanity cabinets
  const laundft=ref(0);//laundry normally uppers 
  const kitft=ref(0); //footage for lower cabinets in kitchen
  const closetft=ref(0); //normally full height cabs w no fronts
  const islft=ref(0);  //island
  const kitupft=ref(0); //upper cabinets
  const islbk=ref(); //t/f is there an island
  const hood=ref();  //t/f is there a hood
  const total= 0; //total price derived from calcprice
  
  
  const drbx=70; //drawer boxes fronts separate
  const face= ref(fronts.tw10);

const calcprice=()=>{
  // 
  // const drprice= face.doorprice;
  // const drwprice= face.drawerprice;
  console.log(drprice + " " + drprice);
    alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');


}

</script>

<template>
  <div class="estimator">    
    <h1>Estimator</h1>
    <p>an educated guess</p>
    <div id="doorsel">
      <h3>Lets pick a door from<br>some basic door styles!</h3>
      <select  name="door" id="door"  v-model="face">
        <option :value='fronts.tw10'  name="tw10">Tw-10</option>
        <option :value='fronts.crp10' name="crp10">CRP10</option>
        <option :value="fronts.tenrc" name="tenrc">10rc</option>
        <option :value="fronts.tensq" name="tensq">10Sq</option>
        <option :value="fronts.aspen" name="aspen">Aspen</option>
        <option :value="fronts.savannah" name="savannah">SavannahMT</option>
      </select>
      <img :src='face.pic' alt=""height='150px'>
    </div>
    <form @submit.prevent="calcprice">
      <label for="kitft">Kitchen linear footage</label>
      <input type="number" id="kitft" name="kitft" v-model="kitft">
      <label for="kitupft">Kitchen upper cabinet linear footage</label>
      <input type="number" id="kitupft" name="kitupft" v-model="kitupft">
      <label for="hood">decorative wood hood?</label>
      <input type="checkbox" name="hood" id="hood" v-model="hood">
      <label for="islft">Kitchen island linear footage</label>
      <input type="number" name="islft" id="islft" v-model="islft">
      <label for="backcab">Cabinets on back of island</label>
      <input type="checkbox" name="backcab" id="backcab" v-model="islbk">
      <label for="bathft">Bath Vanity linear footage</label>
      <input type='number' id="bathft" name="bathft" v-model="bathft">
      <label for="closetft">Closet linear footage</label>
      <input type="number" id="closetft" name="closetft" v-model="closetft">
      <label for="laundft">Laundry room footage</label>
      <input type="number" name="laundft" id="laundft" v-model="laundft">
      <button v-on:submit="calcprice">submit</button>

    </form>
  </div>
</template>

<style scoped>
#hovdisp {
  float:right;
}
</style>