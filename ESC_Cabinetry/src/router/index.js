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
