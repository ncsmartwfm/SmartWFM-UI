<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form @submit.prevent="submitForm">
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control form-control-lg" v-model="formData.emailId"/>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control form-control-lg" v-model="formData.password"/>
          </div>
          <button class="btn btn-outline-primary" type="submit">Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "Login-Component",
  data() {
    return {
      formData: {
        'emailId': '',
        'password': ''
      },
    }
  },
  methods: {
    async submitForm() {
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      const response = await axios.get('http://10.230.24.183:8080/users?emailId=' + this.formData.emailId + '&password=' + this.formData.password);
      console.log('Response:', response);
      console.log('Response:', response.data);
      if (response.status === 200) {
        if (response.data.includes('LM')) {
          await this.$router.push({name: 'LMScreen'}); //['LM', 'DO', 'WFM']
        }
      } else {
        alert("Incorrect Email or Password.");
      }
    }
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
