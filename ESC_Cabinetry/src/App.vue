<script setup>
import NAV from '@/components/chunks/navigation.vue';
import hero from '@/components/chunks/hero.vue'
import { RouterView } from 'vue-router';
</script>



<template>
      <NAV />
      <div class="wrapper">
      <hero />
      <RouterView></RouterView>
      <h1>This lives in app.vue</h1>
    </div>

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

</style>
