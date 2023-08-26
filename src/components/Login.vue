<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form>
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control form-control-lg"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg"/>
          </div>
          <router-link class="btn btn-outline-primary" to="/line-manager">Sign in</router-link>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login-Component",
  data() {
    return {}
  }
}
</script>