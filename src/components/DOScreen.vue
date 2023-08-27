<template>
  <div class="dashboard">
    <SidebarDO/>
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
import SidebarDO from "@/components/SidebarDO.vue";

export default {
  name: "DOScreen",
  components: {SidebarDO}
}
</script>


<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #08b9e6;
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
}
</style>