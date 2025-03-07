import './assets/main.css'
import 'vue-final-modal/style.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'

import { createVfm } from 'vue-final-modal'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ToastPlugin from 'vue-toast-notification'

const app = createApp(App)
const vfm = createVfm()

app.use(vfm)
app.use(ToastPlugin)
app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
