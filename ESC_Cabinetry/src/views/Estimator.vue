<script>
export default{
  data(){
    return{
      kitcostPft: 300,
      bathcostPft: 275,
      laundcostPft: 200,
      closetcostPft: 400,

    };
  },
  methods:{
    disclaimer(){
      alert('Disclaimer: \n This estimator is for rough estimates only! \n It is intended to give you a very rough estimate of the cost of your project\n and is subject to change drastically.\nThese changes are influenced by but not limited to:/n -Consolidation through a general contractor. \n -various discounts that may be applied.\n -Differing material choices and colors\n -Accessibility hardships and special requirements. \nBy clicking OK you acknowledge that this estimate is in no way binding and subject to change.');
    }
    estimate(){
    }    
  },
  beforeMount(){
      this.disclaimer()
    },
};
</script>

<template>
  <div class="estimator">
    
    <h1>Estimator</h1>
    <p></p>
    <sub>What the hell is happening?</sub>
  </div>
</template>

<!-- <style>

</style> -->
