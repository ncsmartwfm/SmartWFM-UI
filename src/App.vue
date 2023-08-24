<template>
  <div id="App">
    <Candidate />
    <Login />
    <Demands />
  </div>
</template>

<script>
import Candidate from './components/Candidate.vue'
import Login from './components/Login.vue'
import Demands from './components/Demands.vue'


export default {
  name: 'App',
  components: {
    Login,
    Candidate,
    Demands
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
