import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import 'uno.css'
import '@/assets/css/style.css'

createApp(App).use(createPinia()).use(router).mount('#app')
