<script setup>
// import router from './router';
// import navigation from './components/chunks/navigation.vue';
// import { createApp } from 'vue';
// const nav=createApp(navigation)
// nav.use(router)
// nav.mount('#nav')
// import { RouterView } from 'vue-router';
</script>



<template>
  <header>
      <div id="nav">
       <RouterLink to="/Estimator">Estimator</RouterLink>
      </div>
      <div class="wrapper">
      <RouterView></RouterView>
      <h1>This lives in app.vue</h1>
    </div>
  </header>

</template>

<!-- <style scoped>

</style> -->
