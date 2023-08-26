<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <h3>Add Candidate</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Candidate Domain ID</label>
            <input type="text" class="input-field" v-model="formData.candidateId" required/>
          </div>
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="input-field" v-model="formData.firstName" required/>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="input-field" v-model="formData.lastName" required/>
          </div>
          <div class="form-group">
            <label>Current Domain</label>
            <input type="text" class="input-field" v-model="formData.domain" required/>
          </div>
          <div class="form-group">
            <label>Skill Set (Comma Separated)</label>
            <input type="text" class="input-field" v-model="formData.skillSet" required/>
          </div>

          <div class="form-group">
            <label>Years of Experience</label>
            <input type="number" class="input-field" v-model="formData.yearsOfExperience" required/>
          </div>
          <div>
            <label>Years of Experience in current domain</label>
            <input type="number" class="input-field" v-model="formData.yearOfExperienceInCurrentDomain" required/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" class="input-field" v-model="formData.candidateEmailId" required/>
          </div>
          <div>
            <label>LM Domain ID</label>
            <input type="text" class="input-field" v-model="formData.lineManagerOfficialId" required/>
          </div>
          <div>
            <label>LM Name</label>
            <input type="text" class="input-field" v-model="formData.lineManagerName" required/>
          </div>
          <div>
            <label>LM Email</label>
            <input type="email" class="input-field" v-model="formData.lineManagerEmailId" required/>
          </div>
          <div>
            <label>Country</label>
            <input type="text" class="input-field" v-model="formData.country" required/>
          </div>
          <div>
            <label>City</label>
            <input type="text" class="input-field" v-model="formData.city" required/>
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
      this.formData.skillSet = this.formData.skillSet.split(',');
      console.log('Form submitted with data:', JSON.stringify(this.formData));
      const response = await axios.post('http://10.230.24.183:8080/candidates', this.formData);
      console.log('Response:', response.data);

    }
  }
};
</script>


<style scoped>

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
/* Style for the table container */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Styling for the table */
.custom-table {
  margin-top: 2em;
  width: 70%;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: lightblue;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-table th,
.custom-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

/* Styling for odd rows */
.custom-table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

/* Styling for row hover */
.custom-table tbody tr:hover {
  background-color: #e0e0e0;
}

/* Styling for the action button */
.action-button {
  background-color: rgb(8, 185, 230);
  color: rgb(255, 255, 255);
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}


</style>

