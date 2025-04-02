<script setup>
import { RouterLink } from 'vue-router';
import icon from '@/icons/escapekey.jpg'
</script>

<template>
    <header>
        <img v-bind:src="icon" alt=""height='75px'>
        <div id="htxt">
            <h1>Example Site Cabinetry</h1>
            <sub>"Create your escape in your home"</sub>
        </div>
    </header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/estimator">Estimator</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
</template>

<style scoped>
h1{font-family: fantasy;
    font-style: italic;
    margin-left: 120px;}
img {
    padding-left:5%;
    float:left;
}
nav{
    display:block;
    width: 100%;
    background-color: rgba(150, 173, 221, 0.699);
    text-align: center;
    height: 50px;
    }
a{
    display: inline-block;
    padding:10px;
    margin-right: 5%;
    margin-left: 5%;
    margin-top:3px;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    color: rgb(11, 11, 77);
    border-style: solid;
    box-shadow: 0, 2em, 2em, 0;
    border-radius: .75em;
    background-color: rgba(116, 135, 177, 0.699) ;
}
header{
    width: 100%;
    background-color: rgba(127, 159, 229, 0.699);
    padding-top: 20px;
    padding-bottom: 20px;
}
sub{
    font-family: cursive, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
}
#htxt{
    display: block;
    padding-left: 3%;
}
a:hover {
    font-weight: bolder;
    font-size: 110%;
    background-color: hsla(160, 100%, 37%, 0.2);
  }
</style>