<template>
    <div class="container">
        <h1 class="text-center">Available Matching Candidates List</h1>
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
                <th>Matched</th>
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
                    <!--<td><button v-on:click="getMatches(candidate.demandCandidateMatch)">Check Matches</button></td>-->
                    <td>
    <h3 v-for="demandCandidateMatch in candidate.demandCandidateMatch" :key="demandCandidateMatch.Id">
      Candidate Id:  {{demandCandidateMatch.candidateId}}
      Demand Id:{{demandCandidateMatch.matchPercentage}}
      Match percentage:{{demandCandidateMatch.demandId}}
    </h3>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="module">
import MatchingCandidateService from '../services/MatchingCandidateService'
    export default {
        name: 'MatchingCandidate-component',
        data(){
            return {
                candidates : []
            }
            
        },
        methods: {
            getMatchedCandidates(id){
                MatchingCandidateService.getMatchedCandidates(id).then((response) => {
                    this.candidates = response.data;
                }
                );
            }
        },
        created() {
            this.getMatchedCandidates(id)
        }
    }
</script>

