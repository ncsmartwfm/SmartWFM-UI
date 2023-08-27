<template>
    <div class="container">
        <h1 class="text-center">Matching Demands List</h1>
        <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Project Name</th>
                <th>Project Role</th>
                <th>Desired Years of Experience</th>
                <th>Domain</th>
                <th>Desired Location</th>
            </thead>
            <tbody>
                <tr v-for="demand in demands" v-bind:key="demand.id">
                    <td>{{demand.id}}</td>
                    <td>{{demand.projectName}}</td>
                    <td>{{demand.projectRole}}</td>
                    <td>{{demand.desiredYearsOfExperience}}</td>
                    <td>{{demand.domain}}</td>
                    <td>{{demand.desiredLocation}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import MatchingDemandsService from '../services/MatchingDemandsService'
    export default {
        name: 'MatchingDemands-component',
        data(){
            return {
                demands : []
            }

        },
        methods: {
            getMatchedDemands(id){
                MatchingDemandsService.getMatchedDemands(id).then((response) => {
                    this.demands = response.data;
                }
                );
            }
        },
        created() {
            this.getMatchedDemands(id)
        }
    }
</script>

