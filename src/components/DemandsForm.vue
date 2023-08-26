<template>
    <div class="vue-tempalte">
      <h3>Add Demands</h3>
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

import axios from 'axios'

export default {
  name: 'el',
  data () {
    return {
       formdata:{ firstname: '', lastname: '', email: '', password: '' }
       // this is formdata object to store form values
    }
  },
  methods: {
    submitform(){
      axios.post('/url', { this.formdata })
      .then(res => {
         // response
      })
      .catch(err => { 
         // error 
      })
  },
  mounted () {

  },
  components: {

  }
}
};
</script>
  <style>
  /* Add your CSS styles here */
  </style>
  