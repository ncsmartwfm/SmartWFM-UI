<template>
    <div class="container">
        <br>
        <h1 class="text-center">Matching Demands</h1>
        <table class="custom-table">
            <thead>
                
                <th custom-table th>Candidate Name</th>
                <th custom-table th>Project Name</th>
                <th custom-table th>Project Role</th>
                <th custom-table th>Match Percentage</th>
                <th custom-table th>Recommendation</th>
                
            </thead>
            <tbody>
                <tr v-for="demandCandidateMatch in matchedCandidates" v-bind:key="demandCandidateMatch.Id">
                    <td custom-table td>{{demandCandidateMatch.firstName}} {{demandCandidateMatch.lastName}}</td>
                    <td custom-table td>{{demandCandidateMatch.projectName}}</td>
                    <td custom-table td>{{demandCandidateMatch.projectRole}}</td>
                    <td custom-table td>{{demandCandidateMatch.match}}</td>
                    <td v-if="demandCandidateMatch.recommendation" custom-table td>Recommended</td>
                    <td v-else custom-table td><button class="dark-blue-button" v-on:click="updateRecommendation(demandCandidateMatch)">Recommend</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="module">
//import MatchedCandidatesService from '../services/MatchedCandidatesService'
import MatchingCandidatesService from '../services/MatchingCandidatesService'
import RecommendService from '../services/LM/RecommendService'
//recommend = false
export default {
        name: 'MatchedCandidate-component',
        //props: ['myprop'],
        data(){
            return {
                matchedCandidates : []
            }
            
        },
        methods: {
           
            getMatchedCandidates(){
                console.log("Test Match"+this.$route.params.myProperty)
                MatchingCandidatesService.getMatchedCandidate(this.$route.params.myProperty).then((response) => {
                    this.matchedCandidates = response.data;
                }
                );
            },
            updateRecommendation(demandCandidateMatch){
                console.log(demandCandidateMatch.projectName);
                RecommendService.updateRecommendation(demandCandidateMatch).then((response) => {
                this.matchedCandidates = response.data;
                
                }
                );
                
            }
        },
        created() {
            this.getMatchedCandidates()
        }
    //     ,
    //     mounted(){
    //         if(this.matchedCandidates.recommendation){
    //             recommend = true;
    //             this.getMatchedCandidates();
    //         }
    //  }
    }

</script>


<style scoped>

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
/* Style for the table container */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Styling for the table */
.custom-table {
  margin-top: 2em;
  width: 70%;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: lightblue;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-table th,
.custom-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

/* Styling for odd rows */
.custom-table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

/* Styling for row hover */
.custom-table tbody tr:hover {
  background-color: #e0e0e0;
}

/* Styling for the action button */
.action-button {
  background-color: rgb(8, 185, 230);
  color: rgb(255, 255, 255);
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}


</style>

