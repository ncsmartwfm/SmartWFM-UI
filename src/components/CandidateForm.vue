<template>
    <div id="app" class="candidate-form-container">
        <h3 class="login-header">Please Enter Available Candidate Details.</h3>
        <form>
          <div class="form-group">
            <label for="email" class="form-label">Candidate ID</label>
            <input type="email" id="email" v-model="email" :class="{ 'is-invalid': errors.email }"
                   class="form-control form-input">
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <div class="password-input">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                     :class="{ 'is-invalid': errors.password }" class="form-control form-input">
              <button type="button" class="password-toggle" @click="showPassword = !showPassword">{{
                  showPassword ? 'Hide' :
                      'Show'
                }}
              </button>
            </div>
            <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <p class="forgot-password-link">Forgot your password? <a href="#">Click here</a></p>
        </form>
      </div>
</template>

<script type="module">
import CandidateService from '../services/CandidateService'
    export default {
        name: 'CandidateForm-component',
        data(){
            return {
                candidates : []
            }
            
        },
        methods: {
            getCandidates(){
                CandidateService.getCandidates().then((response) => {
                    this.candidates = response.data;
                }
                );
            }
        },
        created() {
            this.getCandidates()
        }
    }
</script>

