<template>
  <div class="container">
    <!-- <h1 class="text-center">Available Candidates List</h1> -->
    <table class="custom-table">
      <thead>

      <th custom-table th>Candidate Name</th>
      <th custom-table th>Candidate Email ID</th>
      <!-- <th>Skills</th> -->
      <th>Years of Experience</th>
      <!--<th>Years of Experience in Current Domain</th>-->
      <!-- <th>Line Manager</th>
      <th>Line Manager Email Id</th>
      <th>Country</th>
      <th>City</th> -->
      <th custom-table th>Action</th>
      </thead>
      <tbody>
      <tr v-for="candidate in candidates" v-bind:key="candidate.id">
        <td custom-table td>{{ candidate.firstName }} {{ candidate.lastName }}</td>

        <td>{{ candidate.candidateEmailId }}</td>
        <!-- <td>
          <li v-for="skills in candidate.skillSet" :key="skills">
            {{skills}}

          </li>

        </td> -->
        <td>{{ candidate.yearsOfExperience }}</td>
        <!--<td>{{candidate.yearOfExperienceInCurrentDomain}}</td>-->


        <!-- <td>{{candidate.country}}</td>
        <td>{{candidate.city}}</td> -->
        <!-- <td><button v-on:click="getMatchedCandidates()">Matching Demands</button></td> -->
        <!--<router-link class="btn btn-outline-primary" to="/matchedcandidates">Matching Demands</router-link>-->
        <td>
          <button class="dark-blue-button" v-on:click="approve(candidate)">Approve
          </button>
          <button class="dark-blue-button" v-on:click="reject(candidate)">Reject
          </button>
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="module">
import CandidateService from '../services/CandidateService'
import MatchingCandidatesService from '../services/MatchingCandidatesService'
import axios from "axios";

export default {
  name: 'Candidate-DO-component',
  props: ['myprop'],
  data() {
    return {
      candidates: [],
      formData: {
        'candidateId': '',
        'firstName': '',
        'lastName': '',
        'demandId': '',
        'projectName': '',
        'projectRole': '',
        'match': 0,
        'recommendation': true,
        'status': ''
      }
    }

  },
  methods: {
    async approve(candidate) {
      try {
        console.log('Candidate submitted with data:', candidate);
        const response = await axios.put('http://10.230.24.183:8080/candidate/approvedbyDO', candidate);
        console.log('Response:', response);
      } catch (error) {
        console.error('API Error:', error);
      }
      alert('Approve Processed. Notification Sent to LM.');
    }, async reject(candidate) {
      try {
        console.log('Candidate submitted with data:', candidate);
        const response = await axios.put('http://10.230.24.183:8080/candidate/approvedbyDO', candidate);
        console.log('Response:', response);
      } catch (error) {
        console.error('API Error:', error);
      }
      alert('Reject Processed. Notification Sent to LM.');

    },
    listCandidates() {
      CandidateService.getCandidates().then((response) => {
            this.candidates = response.data;
          }
      );
    },
    getMatchedCandidates(id) {
      //console.log("Test Match"+id)
      //MatchingCandidateService.getMatchedCandidates().then((response) => {
      //  this.candidates = response.data;
      //}
      //);
      //myprop = id;
      //this.$router.replace({name:'matchedcandidates', params:{myprop}});
      this.$router.push({
        name: 'matchedcandidates',
        params: {myProperty: id}
      })
    }
  },
  created() {
    this.listCandidates()
  }
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
  background-color: rgb(151, 220, 238);;
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

