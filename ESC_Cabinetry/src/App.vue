<script setup>
import NAV from '@/components/chunks/navigation.vue';
import hero from '@/components/chunks/hero.vue';
import Footer from '@/components/chunks/Footer.vue'
import { RouterView } from 'vue-router';
</script>



<template>
      <NAV />
      <div class="wrapper">
      <hero />
      <RouterView></RouterView>
      </div>
      <Footer />

</template>

<style scoped>
NAV{width: 100%;
margin: 0%;
padding:0%}

hero{
  display: block;
  max-width: 100px;
  margin: auto;
}
RouterView{
  width: 100%;
}

</style>
