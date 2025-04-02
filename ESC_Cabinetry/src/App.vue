<script setup>
import NAV from '@/components/chunks/navigation.vue';
import hero from '@/components/chunks/hero.vue'
import { RouterView } from 'vue-router';
</script>



<template>
      <NAV />
      <hero />
      <div class="wrapper">
      <RouterView></RouterView>
      <h1>This lives in app.vue</h1>
    </div>

</template>

<style scoped>
NAV{width: 100%;
margin: 0%;
padding:0%}
</style>
