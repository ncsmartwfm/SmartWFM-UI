<template>
    <div class="container">
      <h3>Add Candidate</h3>
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/candidate/add">Add Available Candidate</router-link>
        </li>
        <br/>
        <br/>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/candidate/view">View Added Candidates</router-link>
        </li>
        <br/>
        <br/>
        <br/>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/demand/add">Add Demand</router-link>
        </li>
        <br/>
        <br/>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/demand/view">View Added Demands</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "LMScreen"
}
</script>

<style scoped>

</style>