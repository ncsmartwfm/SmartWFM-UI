<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <h3>Add Demand</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Demand ID</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.demandId" required/>
          </div>
          <div class="form-group">
            <label>Project Name</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.projectName" required/>
          </div>
          <div class="form-group">
            <label>Project Role</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.projectRole" required/>
          </div>
          <div class="form-group">
            <label>desiredSkillSet</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.desiredSkillSet" required/>
          </div>
          <div class="form-group">
            <label>DesiredYearsOfExperience</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.desiredYearsOfExperience" required/>
          </div>
          <div class="form-group">
            <label>Domain</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.domain" required/>
          </div>
          <div class="form-group">
            <label>Location</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.location" required/>
          </div>
          <div class="form-group">
            <label>Desired Location</label>
            <input type="text" class="form-control form-control-lg" v-model="formData.desiredLocation" required/>
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
        'location': '',
        'desiredLocation': ''
      }
    };
  },
  methods: {
    async submitForm() {
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      this.formData.desiredSkillSet = this.formData.desiredSkillSet.split(',');
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      const response = await axios.post('http://10.230.24.183:8080/demands', this.formData);
      console.log('Response:', response.data);

    }
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
