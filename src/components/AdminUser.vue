<template>
    <div id="app" class="adminuser-form-container">
        <h1 class="text-center">Please Enter User with Roles</h1>
        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" v-model="email" :class="{ 'is-invalid': errors.email }"
               class="form-control form-input">
        <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>

        <button @click="onClick()">

        </button>
        </div>
        
    </div>
</template>

<script type="module">
import AdminUserService from '../services/AdminUserService'
    export default {
        name: 'AdminUser-component',
        data(){
            return {
                candidates : []
            }
            
        },
        methods: {
            onClick(){
                console.log('Click by Adminuser')
            }
        },
        created() {
            this.getCandidates()
        }
    }
</script>

