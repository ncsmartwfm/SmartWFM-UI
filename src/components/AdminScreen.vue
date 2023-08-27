<template>
    <div class="dashboard">
      <Sidebar/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  
  </template>
  
  <script>
  
  import Sidebar from "@/components/SidebarLM.vue";
  
  export default {
    name: "AdminScreen",
    components: {Sidebar}
  }
  </script>
  
  
  <style>
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #08b9e6;
    height: 10vh;
    width: 100vw;
  }
  
  .content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
  }
  </style>