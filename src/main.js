import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/main.css'

import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(router)

AOS.init({
    duration: 1500
});

app.mount('#app')
