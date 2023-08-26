import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [

    {
        path: '/',
        name: 'login',
        component: () => import('../components/Login.vue')
    }, {
        path: '/signup',
        name: 'signup',
        component: () => import('../components/Signup.vue')
    },{
        path: '/candidate',
        name: 'candidate',
        component: () => import('../components/Candidate.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
