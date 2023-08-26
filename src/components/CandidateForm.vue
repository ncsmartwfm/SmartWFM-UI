<template>
  <div class="vue-tempalte">
    <h3>Add Candidate</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Candidate Email</label>
        <input type="email" class="form-control form-control-lg" v-model="formData.name" required/>
      </div>
      <div class="form-group">
        <label>Years of Experience</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.email" required/>
      </div>
      <div class="form-group">
        <label>Years of Experience in current domain</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.email" required/>
      </div>
      <div class="form-group">
        <label>Candidate Skills</label>
        <input type="text" class="form-control form-control-lg" v-model="formData.email" required/>
      </div>
      <router-link class="btn btn-outline-primary" to="/line-manager">Add</router-link>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // You can perform form submission logic here
      console.log('Form submitted with data:', this.formData);
      // Reset form data
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
