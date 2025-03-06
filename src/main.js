import './assets/main.css'
import 'vue-final-modal/style.css'

import { createVfm } from 'vue-final-modal'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
const vfm = createVfm()

app.use(vfm)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
