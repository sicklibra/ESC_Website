<script setup>
import key from '@/assets/decor/key.png'
</script>

<template>
    <div id="hero">
<img id="left" v-bind:src="key" alt=""height='50px'>
<img id="right" v-bind:src="key" alt="" height="50px">
</div>
</template>

<style scoped>
#hero{
    margin: auto;
    display: block;
    max-width: 700px;

}
img{

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