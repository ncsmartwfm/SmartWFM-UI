<template>
    <div class="container">
        <h1 class="text-center">Available Candidates List</h1>
        <table class="table table-striped">
            <thead>
                <th>Candidate ID</th>
                <th>Candidate First Name</th>
                <th>Candidate Last Name</th>
                <th>Candidate Email ID</th>
            </thead>
            <tbody>
                <tr v-for="candidate in candidates" v-bind:key="candidate.id">
                    <td>{{candidate.id}}</td>
                    <td>{{candidate.firstName}}</td>
                    <td>{{candidate.lastName}}</td>
                    <td>{{candidate.emailId}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CandidateService from '../services/CandidateService'
    export default {
        name: 'Candidates',
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

