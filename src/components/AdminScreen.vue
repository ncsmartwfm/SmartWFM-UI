<template>
    <div class="dashboard">
      <SidebarAdmin/>
      <div class="content">
        <router-view/>
      </div>
    </div>
  
  </template>
  
  <script>
  
  import SidebarAdmin from "@/components/SidebarAdmin.vue";
  
  export default {
    name: "AdminScreen",
    components: {SidebarAdmin}
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