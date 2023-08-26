<template>
    <div class="container">
        <h1 class="text-center">Demands List</h1>
        <table class="table table-striped">
            <thead>                
                <th>Project Name</th>
                <th>Project Role</th>
                <th>Desired Years of Experience</th>
                <th>Domain</th>
                <th>Location</th>
                <th>Desired Location</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="demand in demands" v-bind:key="demand.id">                    
                    <td>{{demand.projectName}}</td>
                    <td>{{demand.projectRole}}</td>
                    <td>{{demand.desiredYearsOfExperience}}</td>
                    <td>{{demand.domain}}</td>
                    <td>{{demand.location}}</td>
                    <td>{{demand.desiredLocation}}</td>
                    <td><button v-on:click="getMatchedCandidates(demand.demandId)">Matching Candidates</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DemandsService from '../services/DemandsService'
    export default {
        name: 'Demands-component',
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

