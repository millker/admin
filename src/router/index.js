import { createRouter, createWebHistory } from "vue-router";

import Layout from '../layout/index.vue'

const constantRoutes = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: ()=>import('../views/dashboard/index.vue'),
            meta: {
                title: 'Dashboard'
            }
        }]
    },
    {
        path: '/login',
        component: ()=>import('../views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
})

export function resetRouter() {
    // 新路由
}

export default router