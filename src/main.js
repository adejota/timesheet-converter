import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from "maska"

import App from './App.vue'
import router from './router'

import 'animate.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive("maska", vMaska)

app.mount('#app')
