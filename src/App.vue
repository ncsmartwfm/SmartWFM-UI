<template>
  <app-header />
  <router-view/>
  <div id="App">
    <Login />
    <Candidate/>
    <CandidateForm/>
    <Demands />
  </div>
  <app-footer />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Login from './components/Login.vue'
import Candidate from './components/Candidate.vue'
import CandidateForm from './components/CandidateForm.vue'
import Demands from './components/Demands.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    Login,
    Candidate,
    CandidateForm,
    Demands,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
