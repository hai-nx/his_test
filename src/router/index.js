import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { LAYOUT_AUTH, LAYOUT_DEFAULT } from '../constants'

import HomePage from '../views/Home.vue'
import LoginPage from '../views/Login.vue'

import DashboardPage from '../views/Dashboard.vue'

import role from '@/views/role'
import role_detail from '@/views/role/detail'

import user from '@/views/user'
import user_detail from '@/views/user/detail'


import error from '../views/error'

const routes = [
    { path: '/', name: 'home', component: HomePage, meta: { layout: LAYOUT_DEFAULT } },
    { path: '/login', name: 'login', component: LoginPage, meta: { layout: LAYOUT_DEFAULT } },

    { path: '/dashboard', name: 'dashboard', component: DashboardPage, meta: { layout: LAYOUT_AUTH } },

    { path: '/role', name: 'role', component: role, meta: { layout: LAYOUT_AUTH } },
    { path: '/role/detail/:id', name: 'role_detail', component: role_detail, meta: { layout: LAYOUT_AUTH } },
    { path: '/role/detail/create', name: 'role_detail_create', component: role_detail, meta: { layout: LAYOUT_AUTH } },

    { path: '/user', name: 'user', component: user, meta: { layout: LAYOUT_AUTH } },
    { path: '/user/detail/:id', name: 'user_detail', component: user_detail, meta: { layout: LAYOUT_AUTH } },
    { path: '/user/detail/create', name: 'user_detail_create', component: user_detail, meta: { layout: LAYOUT_AUTH } },


    { path: '/:pathMatch(.*)*', name: 'not-found', component: error },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

router.beforeEach((to, from, next) => {

    // kiểm tra đăng nhập
    const isAuthenticated = store.getters['auth/getAuthenticated'];
    // kiểm tra trang có yêu càu quyền đăng nhập
    const isAuthenticationRequired = to.meta.layout === LAYOUT_AUTH; 
    
    // nếu trang yêu cầu quyền đăng nhập mà chua đăng nhập thì trả về trang login
    if (!isAuthenticated && isAuthenticationRequired)
        next({ name: 'login' });
    else
        next();
})

export default router