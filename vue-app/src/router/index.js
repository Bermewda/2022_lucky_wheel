import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LuckyDrawPage from '@/pages/LuckyDrawPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/lucky-draw',
        name: 'LuckyDrawPage',
        component: LuckyDrawPage
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
