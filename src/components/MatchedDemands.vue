<template>
    <div class="container">
        <h1 class="text-center">Matched Demands</h1>
        <table class="table table-striped">
            <thead>
                
                <th>Candidate Name</th>
                <th>Project Name</th>
                <th>Project Role</th>
                <th>Match Percentage</th>
                <th>Recommendation</th>
                
            </thead>
            <tbody>
                <tr v-for="demandCandidateMatch in matchedCandidates" v-bind:key="demandCandidateMatch.Id">
                    <td>{{demandCandidateMatch.firstName}} {{demandCandidateMatch.lastName}}</td>
                    <td>{{demandCandidateMatch.projectName}}</td>
                    <td>{{demandCandidateMatch.projectRole}}</td>
                    <td>{{demandCandidateMatch.matchPercentage}}</td>
                    <td><button v-on:click="updateRecommendation(demandCandidateMatch)">Recommend</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="module">
//import MatchedCandidatesService from '../services/MatchedCandidatesService'
import MatchingCandidatesService from '../services/MatchingCandidatesService'
import RecommendService from '../services/LM/RecommendService'

export default {
        name: 'MatchedDemands-component',
        //props: ['myprop'],
        data(){
            return {
                matchedDemands : []
            }
            
        },
        methods: {
           
            getMatchedDemands(){
                console.log("Test Match"+this.$route.params.myProperty)
                MatchingCandidatesService.getMatchedDemands(this.$route.params.myProperty).then((response) => {
                    this.matchedCandidates = response.data;
                }
                );
            },
            updateRecommendation(demandCandidateMatch){
                console.log(demandCandidateMatch.projectName);
                RecommendService.updateRecommendation(demandCandidateMatch).then((response) => {
                this.matchedDemands = response.data;
                }
                );
            }
        },
        created() {
            this.getMatchedDemands()
        }
    }

</script>
