<template>
  <div id="App">
<!--    <Employee />-->
    <Login />
  </div>
</template>

<script>
/*
import Employee from './components/Employee.vue'
*/
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    //Employee,
    Login
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
