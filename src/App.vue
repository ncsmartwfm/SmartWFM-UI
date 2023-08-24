<template>
  <div id="App">
    <Login />
    <Candidate/>
    <CandidateForm/>
    <Demands />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Candidate from './components/Candidate.vue'
import CandidateForm from './components/CandidateForm.vue'
import Demands from './components/Demands.vue'

export default {
  name: 'App',
  components: {
    Login,
    Candidate,
    CandidateForm,
    Demands,
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
