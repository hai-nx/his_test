import { createRouter, createWebHistory } from 'vue-router'
import { LAYOUT_DEFAULT } from '../constants'

import HomePage from '../views/Home.vue'

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: HomePage, 
        meta: { 
            layout: LAYOUT_DEFAULT
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

export default router