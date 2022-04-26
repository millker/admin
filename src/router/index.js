import { createRouter, createWebHistory } from "vue-router";

import Layout from '../layout/index.vue'

const constantRoutes = [
    {
        path: '/',
        component: Layout
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

export default router