<template>
  <div class="vue-tempalte">
    <h3>Add Candidate</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Candidate ID</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.candidateId" required/>
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.firstName" required/>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.lastName" required/>
      </div>
      <div class="form-group">
        <label>Domain</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.domain" required/>
      </div>
      <div class="form-group">
        <label>Skill Set (Comma Separated)</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.skillSet" required/>
      </div>

      <div class="form-group">
        <label>Years of Experience</label>
        <input type="number" class="form-control form-control-lg" v-model="formData.yearsOfExperience" required/>
      </div>
      <div>
        <label>Years of Experience in current domain</label>
        <input type="number" class="form-control form-control-lg" v-model="formData.yearOfExperienceInCurrentDomain" required/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" class="form-control form-control-lg" v-model="formData.candidateEmailId" required/>
      </div>
      <div>
        <label>LM ID</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.lineManagerOfficialId" required/>
      </div>
      <div>
        <label>LM Name</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.lineManagerName" required/>
      </div>
      <div>
        <label>LM Email</label>
        <input type="email" class="form-control form-control-lg" v-model="formData.lineManagerEmailId" required/>
      </div>
      <div>
        <label>Country</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.country" required/>
      </div>
      <div>
        <label>City</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.city" required/>
      </div>
      <button type="submit">
Add<!--        <router-link class="btn btn-outline-primary" to="/line-manager">Add</router-link>-->
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CandidateForm",
  data() {
    return {
      formData: {
        'candidateId': '',
        'firstName': '',
        'lastName': '',
        'domain': '',
        'skillSet': [
          ''
        ],
        'yearsOfExperience': 0,
        'yearOfExperienceInCurrentDomain': 0,
        'candidateEmailId': '',
        'lineManagerOfficialId': '',
        'lineManagerName': '',
        'lineManagerEmailId': '',
        'country': '',
        'city': ''
      }
    };
  },
  methods: {
    async submitForm() {
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      this.formData.skillSet=this.formData.skillSet.split(',');
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      const response = await axios.post('http://10.230.24.183:8080/candidates', this.formData);
      console.log('Response:', response.data);

    }
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
