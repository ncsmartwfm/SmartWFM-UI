<template>
  <div class="dashboard">
    <Sidebar/>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>

import SidebarLM from "@/components/SidebarLM.vue";

export default {
  name: "LMScreen",
  components: {SidebarLM}
}
</script>


<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #08b9e6;
  height: 200vh;
  width: 98vw;
}

.content {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 50px 100px 150px 0px;
}
</style>