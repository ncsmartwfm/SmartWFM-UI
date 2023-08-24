import axios from "axios"

const DEMANDS_API_BASE_URL = 'http://10.236.173.154:8080'

class DemandsService {
    getOpenDemands(){
        return axios.get(DEMANDS_API_BASE_URL+"/demands");
    }
}

export default new DemandsService()