import { createRouter, createWebHistory } from 'vue-router'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from '../constants'

import HomePage from '../views/Home.vue'
import LoginPage from '../views/Login.vue'

import DashboardPage from '../views/Dashboard.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage, meta: { layout: LAYOUT_DEFAULT } },
    { path: '/login', name: 'login', component: LoginPage, meta: { layout: LAYOUT_DEFAULT } },

    { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { layout: LAYOUT_AUTH } },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

router.beforeEach((to, from, next) => {
    // chuyển đến trang đăng nhập nếu chưa được login
    const isAuthenticationRequired = to.meta.layout === LAYOUT_AUTH; 
    const isAuthenticated = true;

    if (isAuthenticated && isAuthenticationRequired)
        next({ name: 'login' });
    else
        next();
})

export default router