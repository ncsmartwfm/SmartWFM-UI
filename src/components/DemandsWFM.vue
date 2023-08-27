<template>
    <div class="container">
        <!-- <h1 class="text-center">Demands List</h1> -->
        <br><br><br>
        <table class="custom-table">
            <thead>                
                <th custom-table th>Project Name</th>
                <th custom-table th>Project Role</th>
                <th custom-table th>Desired Years of Experience</th>
                <th custom-table th>Domain</th>
                <th custom-table th>Desired Location</th>
                <th custom-table th>Action</th>
            </thead>
            <tbody>
                <tr v-for="demand in demands" v-bind:key="demand.id">                    
                    <td custom-table td>{{demand.projectName}}</td>
                    <td custom-table td>{{demand.projectRole}}</td>
                    <td custom-table td>{{demand.desiredYearsOfExperience}}</td>
                    <td custom-table td>{{demand.domain}}</td>
                    <td custom-table td>{{demand.desiredLocation}}</td>
                    <td custom-table td><button class="dark-blue-button" v-on:click="getMatchedCandidates(demand.demandId)">Matching Candidates</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DemandsService from '../services/DemandsService'
    export default {
        name: 'Demands-WFM-component',
        data(){
            return {
                demands : []
            }

        },
        methods: {
            getOpenDemands(){
                DemandsService.getOpenDemands().then((response) => {
                    this.demands = response.data;
                }
                );
            }
        },
        created() {
            this.getOpenDemands()
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

