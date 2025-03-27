import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navigation from './components/chunks/navigation.vue';

const app = createApp(App)
const nav =createApp(navigation)
app.use(router)
nav.use(router)
nav.mount('#nav')
app.mount('#app')
