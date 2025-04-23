/*<!-- 
 Author: Josh Hodges
 CSCI215 section 1
 Purpose:
  This project exists to display the use of the Vue.js front end frameowork
  This site functions as a fully functional single page application website
  that includes an estimator that will accept the user input of linear footage
  and specialty cabinets and generate an estimated cost for the Job. 
  
  most of this came with the framework. 
  
  --> */

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import navigation from './components/chunks/navigation.vue';

const app = createApp(App)
// const nav =createApp(navigation)
app.use(router)
// nav.use(router)
// nav.mount('#nav')
app.mount('#app')
