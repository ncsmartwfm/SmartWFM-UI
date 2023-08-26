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
        path: '/line-manager',
        name: 'LMScreen',
        component: () => import('../components/LMScreen.vue')
    },{
        path: '/candidate/add/',
        name: 'LMScreen',
        component: () => import('../components/CandidateForm.vue')
    },{
        path: '/candidate/view',
        name: 'candidate',
        component: () => import('../components/Candidate.vue')
    },
    ,
    {
        path: '/matchingcandidates',
        name: 'matchingcandidates',
        component: () => import('../components/MatchingCandidates.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
