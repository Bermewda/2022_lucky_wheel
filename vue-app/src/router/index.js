import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
