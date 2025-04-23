/*<!-- 
 Author: Josh Hodges
 CSCI215 section 1
 Purpose:
  This project exists to display the use of the Vue.js front end frameowork
  This site functions as a fully functional single page application website
  that includes an estimator that will accept the user input of linear footage
  and specialty cabinets and generate an estimated cost for the Job. 
  
  I certify this is entirely my own work. 
  
  --> */


import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Estimator from '@/views/Estimator.vue'
import ShowRoom from '@/views/ShowRoom.vue'
import About from '@/views/AboutView.vue'


const routes=[
  {path: '/', name: 'home', component: Home},
  {path: '/estimator', name: 'estimator', component: Estimator},
  {path: '/about', name: 'about', component: About},
  {path: '/gallery', name: 'gallery', component:ShowRoom},
]

const router =createRouter({
  history:  createWebHistory(),
  routes
})


export default router
