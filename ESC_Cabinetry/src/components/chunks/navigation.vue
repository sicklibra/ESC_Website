<template>
    <header>
        <img src="../icons/escapekey.jpg" alt=""height='75px'>
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
    /* display:block; */
    width: 100%;
    background-color: rgba(150, 173, 221, 0.699);
    text-align: center;
    /* height: 20px; */
}
a{
    padding: 10%;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    color: rgb(11, 11, 77);
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
</style>