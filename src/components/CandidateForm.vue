<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <!-- <h3>Add Candidate</h3> -->
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Candidate NC ID</label>
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
            <label>LM NC ID</label>
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
          <div>
            <label>Select Status</label><br>
            <select class="input-field" v-model="formData.status">
              <option v-for="status in statuses" :value="status" :key="status">{{ status }}</option>
            </select>
          </div>
          <div>
            <label>Upload Resume</label><br>
            <input type="file" class="input-field" ref="fileInput" accept=".pdf,.doc,.docx" />
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
  async mounted() {
    try {
      //'statuses': ["AVAILABLE", "ALLOCATED", "INTERVIEWED", "APPROVED_BY_DO", "REJECTED_BY_DO", "WAITING_FOR_DO_APPROVAL"]
      const response = await axios.get('http://10.230.24.183:8080/candidates/statuses');
      console.log('Response:', response);
      console.log('Response:', response.data);
      this.statuses = response.data;
      this.formData.status = this.statuses[0];
    } catch (error) {
      console.error('API Error:', error);
    }
  },
  data() {
    return {
      formData: {
        'candidateId': '',
        'firstName': '',
        'lastName': '',
        'domain': '',
        'skillSet': '',
        'yearsOfExperience': 0,
        'yearOfExperienceInCurrentDomain': 0,
        'candidateEmailId': '',
        'lineManagerOfficialId': '',
        'lineManagerName': '',
        'lineManagerEmailId': '',
        'country': '',
        'city': '',
        'status': '',
        'resume':''
      },
      'statuses': [] //"AVAILABLE", "ALLOCATED", "INTERVIEWED", "APPROVED_BY_DO", "REJECTED_BY_DO", "WAITING_FOR_DO_APPROVAL"]
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log('Form submitted with data:', JSON.stringify(this.formData));
        this.formData.skillSet = this.formData.skillSet.split(',');
        const fileInput = this.$refs.fileInput;
        if (!fileInput.files.length) {
          alert('Please select a file to upload.');
          return;
        }
        this.formData.resume = fileInput.files[0];
        console.log('Resume Uploaded.', this.formData.resume);
        console.log('Form submitted with data:', JSON.stringify(this.formData));
        const response = await axios.post('http://10.230.24.183:8080/candidates', this.formData);
        console.log('Response:', response);
        if (response.status === 201) {
          alert("Record Added Successfully.")
          await this.$router.push({name: 'candidate'});
        }
      } catch (error) {
        console.error('API Error:', error);
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

