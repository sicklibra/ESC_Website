<script setup>
import key from '@/assets/decor/key.png'
</script>

<template>
<img id="left" v-bind:src="key" alt=""height='50px'>
<img id="right" v-bind:src="key" alt="" height="50px">
</template>

<style scoped>
img{display: block;
    width: 48%;
    margin-top: 10px;
    margin-bottom: 10px;
}
#left{
    float:left;
}
#right{float: right;
transform: scaleX(-1);}


</style>