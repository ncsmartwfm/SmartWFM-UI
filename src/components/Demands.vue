<template>
    <div class="container">
        <h1 class="text-center">Demands List</h1>
        <table class="table table-striped">
            <thead>
                <th>ID</th>
                <th>Project Name</th>
                <th>Project Role</th>
                <th>Desired Years of Experience</th>
                <th>Domain</th>
                <th>Location</th>
                <th>Desired Location</th>
            </thead>
            <tbody>
                <tr v-for="demand in demands" v-bind:key="demand.id">
                    <td>{{demand.id}}</td>
                    <td>{{demand.projectName}}</td>
                    <td>{{demand.projectRole}}</td>
                    <td>{{demand.desiredYearsOfExperience}}</td>
                    <td>{{demand.domain}}</td>
                    <td>{{demand.location}}</td>
                    <td>{{demand.desiredLocation}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import LineManagerService from '../services/LineManagerService'
    export default {
        name: 'Demands-component',
        data(){
            return {
                demands : []
            }

        },
        methods: {
            getOpenDemands(){
                LineManagerService.getOpenDemands().then((response) => {
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

