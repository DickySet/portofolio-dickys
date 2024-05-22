import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '../views/LandingPage/LandingPage.vue'
import LandingPage1 from '../views/LandingPage/LandingPage1.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Landing Page',
            path: '/',
            component: LandingPage
        },
        {
            name: 'Landing Page 2',
            path: '/landing',
            component: LandingPage1
        },
    ]
});

export default router