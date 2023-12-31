import axios from "axios"

const CANDIDATE_API_BASE_URL = 'http://10.230.24.183:8080'

class CandidateService {
    getCandidates(){
        return axios.get(CANDIDATE_API_BASE_URL+"/candidates");
    }
}

export default new CandidateService()