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
  const bath3stk=ref(0);
  const kit3stk=ref(0)
  var total= 0; //total price derived from calcprice
  var totft= 0 ;
  var numdoors= 0;
  var numdrawers=0;
  
  const drbx=70; //drawer boxes fronts separate
  const face= ref(fronts.tw10);

const calcprice=()=>{
  // if (total !=0){
  //   total=0;
  // }
  var bath3=bath3stk.value;
  var kit3=kit3stk.value;
  var isltot=islft.value
  var drprice=20; //get price of each door based on selection
  var drwprice= 25; // get price of drawer face based on selection

  // if they get back facing cabs on the island... double the island linear footage.
  if (islbk){
   isltot *= 2
  }
  var kitbxL = Math.round(islft.value + kitft.value / 2);
  console.log(kitbxL)//#of base kitchen boxes estincl island

  //fail safe for ridiculous numbers in drawer bases

  //assume min 24" for a sink must have at least 1 more foot to have drawer base
  
  if(bathft.value<3){
    bath3=0;
  }
  //if more  drawer bases than footage requested knock it down to 12" bases and account for sink
  else if (bathft.value-3 < bath3stk.value){
    bath3= bathft.value-3;
  }
  //if there are more 3 stacks requested than kitchen cabinets, leave one cab for sink make the rest 3 drawers
  
  if (kit3stk.value > kitbxL-1){
    kit3=kitbxL-1;
  }  
  // grabs total feet for door and drawer estimates given doors avg 12" count 1 door per ft
  totft = kitft.value + kitupft.value + isltot + bathft.value + laundft.value + closetft.value;
  //closets don't normally get doors, scrap for est.
  // //average 2 doors per cabinet 12" per door kitchen automatically gets 1 drawer in all lowers subtract 1 door for each 3 stack
  // this will keep it on the slightly higher end to avoid sticker shock.
  numdoors = totft - closetft.value - kit3 - bath3; 
  
  numdrawers = kitbxL + (kit3 * 2 ) + ( bath3  *3); //drawer for each kitchen cabinet so add 2 more drwrs for 3 stack.
  // warn that this estimate is not binding in any way. 
    // alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');


// price for drawers and doors 
total = (numdoors* drprice) + (numdrawers * drwprice) + (numdrawers * drbx);
//price for boxes added 
total += (275 * (kitft.value + kitupft.value)) +(275 * bathft.value) + (400 * islft.value) + (200 * laundft.value) 
//add 30% installation charge
total += (total* .3)
document.getElementById('output').style.display='';
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
    </div id='form'>
      <label for="kitft">Kitchen linear footage</label>
      <input type="number" id="kitft" name="kitft" v-model="kitft">
      <label for="kit3stk">How many three drawer cabinets for your kitchen?<br> (island included)</label>
      <input type="number" name="kit3stk" id="kit3stk" v-model="kit3stk">
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
      <label for="bath3stk">How many 3 stack cabinets do you want in your bathroom?<br> (must have room for sink.)</label>
      <input type="number" value="bath3stk" id="bath3stk" v-model="bath3stk">
      <label for="closetft">Closet linear footage</label>
      <input type="number" id="closetft" name="closetft" v-model="closetft">
      <label for="laundft">Laundry room footage</label>
      <input type="number" name="laundft" id="laundft" v-model="laundft">
      <button @click="calcprice">submit</button>
  </div>

  <div id="output" style="display: none;">
    <h1>Your "Mud on the Wall Estimate!"</h1>
    <h2>{{ total }}</h2>
    <ul>Estimated quantities:</ul>
    <li>doors: {{ numdoors }}</li>
    <li>drawers: {{ numdrawers }}</li>
    <li>Total Linear footage: {{ totft }}</li>
  </div>
</template>

<style scoped>
#hovdisp {
  float:right;
}
#output {
  margin: auto;
  text-align: center;
}
</style>