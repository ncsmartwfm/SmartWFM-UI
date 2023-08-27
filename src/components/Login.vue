<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form @submit.prevent="submitForm">
          <h3>Sign In</h3>
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control form-control-lg" v-model="formData.emailId" @blur="fetchData"/>
          </div>
          <br>
          <div class="form-group">
            <label>Password</label><br>
            <input type="password" class="form-control form-control-lg" v-model="formData.password"/>
          </div>
          <br>
          <div class="form-group" v-if="formData.roles.length>1">
            <label>Select Role</label><br>
            <select class="form-control form-control-lg" v-model="formData.selectedRole">
              <option v-for="role in formData.roles" :value="role" :key="role">{{ role }}</option>
            </select>
          </div>
          <br>
          <button class="dark-blue-button" type="submit">Submit
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
        'password': '',
        'roles': [''],
        'selectedRole': ''
      },
    }
  },
  methods: {
    async fetchData() {
      if (this.formData.emailId) {
        try {
          //const response = {'data': ['LM', 'DO','WFM']};
          const response = await axios.get('http://10.230.24.183:8080/user?emailId=' + this.formData.emailId);
          console.log('Response:', response);
          console.log('Response:', response.data);
          this.formData.roles = response.data.roles;
          this.formData.selectedRole = this.formData.roles[0];
        } catch (error) {
          console.error('API Error:', error);
        }
      }
    }
    ,
    async submitForm() {
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      try {
        const response = await axios.get('http://10.230.24.183:8080/users?emailId=' + this.formData.emailId + '&password=' + this.formData.password);
        console.log('Response:', response);
        console.log('Response:', response.data);
        if (response.status === 200) {
          if (this.formData.selectedRole === 'LM') {
            await this.$router.push({name: 'LMScreen'});
          } else if (this.formData.selectedRole === 'WFM') {
            await this.$router.push({path: '/work-force-manager'});
          } else if (this.formData.selectedRole === 'DO') {
            await this.$router.push({path: '/domain-owner'});
          }
        } else {
          alert("Incorrect Email or Password...");
        }
      } catch (error) {
        alert("Server is currently down.. Please retry once it is up !");
      }
    }
  }
};
</script>


<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-form {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.input-field {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #1ba0ecda;
  border-radius: 4px;
  font-size: 14px;
}

.dark-blue-button {
  background-color: rgb(6, 58, 71);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.dark-blue-button:hover {
  background-color: rgb(11, 87, 226);
}
</style>
