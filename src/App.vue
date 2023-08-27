<template>
  
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <img src="./assets/netcracker-1.png" alt="Netcracker">
      <div class="container">
        <!-- <img src="./assets/netcracker-1.png" alt="Netcracker"> -->
      </div>
      <!-- <div>
        <img src="./assets/wfm-small.png" alt="Netcracker">
      </div> -->
    </nav>
    <!-- Main -->
    <div class="App">
      <router-view/>

    </div>
  </div>
</template>


<script>
export default {
  name: 'App'
}
</script>


<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


body {
  margin: 100px;
  padding: 75px;
  box-sizing: border-box;
}
</style>