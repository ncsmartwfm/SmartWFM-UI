import Vue from 'vue'
import VueRouter from 'vue-router'
import LMScreen from "@/components/LMScreen.vue";
import Signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";
import CandidateForm from "@/components/CandidateForm.vue";
import Candidate from "@/components/Candidate.vue";
import DemandForm from "@/components/DemandForm.vue";
import Demands from "@/components/Demands.vue";

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
    }, {
        path: '/line-manager',
        name: 'LMScreen',
        component: () => import('../components/LMScreen.vue'),
        children: [{
            path: '/candidate/add/',
            name: 'CandidateForm',
            component: () => import('../components/CandidateForm.vue')
        }, {
            path: '/candidate/view',
            name: 'candidate',
            component: Candidate
        }, {
            path: '/demand/add/',
            name: 'demand',
            component: DemandForm
        }, {
            path: '/demand/view',
            name: 'viewdemands',
            component: Demands
        }, {
            path: '/matchedcandidates',
            name: 'matchedcandidates',
            component: () => import('../components/MatchedCandidates.vue')
        }]
    }, {
        path: '/work-force-manager',
        name: 'WFMScreen',
        component: () => import('../components/WFMScreen.vue'),
        children: [{
            path: '/wfm/candidate/view/',
            name: 'WFM-Candidate-View',
            component: () => import('../components/CandidatesWFM.vue')
        },{
            path: '/wfm/demand/view/',
            name: 'WFM-Demand-View',
            component: () => import('../components/DemandsWFM.vue')
        }]
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
