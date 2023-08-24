import axios from "axios"

const CANDIDATE_API_BASE_URL = 'http://10.236.173.154:8080'

class CandidateService {
    getAvailableResources(){
        return axios.get(CANDIDATE_API_BASE_URL+"/candidates");
    }
}

export default new CandidateService()