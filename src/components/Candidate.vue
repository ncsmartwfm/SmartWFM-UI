<template>
    <div class="container">
        <h1 class="text-center">Available Candidates List</h1>
        <table class="table table-striped">
            <thead>
                <th>Candidate ID</th>
                <th>Candidate First Name</th>
                <th>Candidate Last Name</th>
                <th>Domain</th>
                <th>Candidate Email ID</th>
                <th>Years of Experience</th>
                <th>Years of Experience in Current Domain</th>
                <th>Line Manager</th>
                <th>Line Manager Email Id</th>                
                <th>Country</th>
                <th>City</th>
            </thead>
            <tbody>
                <tr v-for="candidate in candidates" v-bind:key="candidate.id">
                    <td>{{candidate.id}}</td>
                    <td>{{candidate.firstName}}</td>
                    <td>{{candidate.lastName}}</td>
                    <td>{{candidate.domain}}</td>
                    <td>{{candidate.emailId}}</td>
                    <td>{{candidate.yearsOfExperience}}</td>
                    <td>{{candidate.yearOfExperienceInCurrentDomain}}</td>
                    <td>{{candidate.lineManagerName}}</td>
                    <td>{{candidate.lineManagerEmailId}}</td>                    
                    <td>{{candidate.country}}</td>
                    <td>{{candidate.city}}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="module">
import CandidateService from '../services/CandidateService'
    export default {
        name: 'Candidate-component',
        data(){
            return {
                candidates : []
            }
            
        },
        methods: {
            getCandidates(){
                CandidateService.getAvailableResources().then((response) => {
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

