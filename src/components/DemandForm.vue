<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <!-- <h3>Add Demand</h3> -->
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>ERP Demand Name</label>
            <input type="text" class="input-field" v-model="formData.demandId" required/>
          </div>
          <div class="form-group">
            <label>Domain</label>
            <input type="text" class="input-field" v-model="formData.domain" required/>
          </div>
          <div class="form-group">
            <label>Project Name</label>
            <input type="text" class="input-field" v-model="formData.projectName" required/>
          </div>
          <div class="form-group">
            <label>Project Role</label>
            <input type="text" class="input-field" v-model="formData.projectRole" required/>
          </div>
          <div class="form-group">
            <label>Desired Skill Set [ Comma Separated ] </label>
            <input type="text" class="input-field" v-model="formData.desiredSkillSet" required/>
          </div>
          <div class="form-group">
            <label>Desired Years Of Experience</label>
            <input type="text" class="input-field" v-model="formData.desiredYearsOfExperience" required/>
          </div>
           <div class="form-group">
            <label>Desired Locations [ Comma Separated ] </label>
            <input type="text" class="input-field" v-model="formData.desiredLocation" required/>
          </div>
          <button class="dark-blue-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "DemandForm",
  data() {
    return {
      formData: {
        'demandId': '',
        'projectName': '',
        'projectRole': '',
        'desiredSkillSet': [
          ''
        ],
        'desiredYearsOfExperience': 0,
        'domain': '',
        'desiredLocations': ''
      }
    };
  },
  methods: {
    async submitForm() {
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      this.formData.desiredSkillSet = this.formData.desiredSkillSet.split(',');
      this.formData.desiredLocations = this.formData.desiredLocations.split(',');
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      const response = await axios.post('http://10.230.24.183:8080/demands', this.formData);
      console.log('Response:', response.data);

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
  background-color: rgb(8, 185, 230);
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

