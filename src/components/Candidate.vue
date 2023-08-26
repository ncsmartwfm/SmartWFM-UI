<template>
    <div class="container">
        <h1 class="text-center">Available Candidates List</h1>
        <table class="table table-striped">
            <thead>
                
                <th>Candidate Name</th>                
                <th>Candidate Email ID</th>
                <!--<th>Years of Experience</th>
                <th>Years of Experience in Current Domain</th>-->
                <!-- <th>Line Manager</th>
                <th>Line Manager Email Id</th>                
                <th>Country</th>
                <th>City</th> -->
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="candidate in candidates" v-bind:key="candidate.id">
                    <td>{{candidate.firstName}} {{candidate.lastName}}</td>                    
                    
                    <td>{{candidate.emailId}}</td>
                    <!--<td>{{candidate.yearsOfExperience}}</td>
                    <td>{{candidate.yearOfExperienceInCurrentDomain}}</td>-->
                    
                                       
                    <!-- <td>{{candidate.country}}</td>
                    <td>{{candidate.city}}</td> -->
                    <!-- <td><button v-on:click="getMatchedCandidates()">Matching Demands</button></td> -->
                    <router-link class="btn btn-outline-primary" to="/matchingcandidates">Matching Demands</router-link>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="module">
import CandidateService from '../services/CandidateService'
import MatchingCandidateService from '../services/MatchingCandidatesService'
    export default {
        name: 'Candidate-component',
        data(){
            return {
                candidates : []
            }
            
        },
        methods: {
            listCandidates(){
                CandidateService.getCandidates().then((response) => {
                    this.candidates = response.data;
                }
                );
            },
            getMatchedCandidates(){
                console.log("Test Match")
                MatchingCandidateService.getMatchedCandidates().then((response) => {
                    this.candidates = response.data;
                }
                );
            }
        },
        created() {
            this.listCandidates()
        }
    }
</script>

