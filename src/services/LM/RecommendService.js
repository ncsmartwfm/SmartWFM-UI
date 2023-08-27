import axios from "axios"

const API_BASE_URL = 'http://10.230.24.183:8080'

class RecommendService {
    updateRecommendation(demandCandidateMatch){
        return axios.put('http://10.230.24.183:8080/candidates/match', demandCandidateMatch);
}

updateDOApprovalStatus(demandCandidateMatch){
	return axios.put('http://10.230.24.183:8080/candidate/sendForDOApproval', demandCandidateMatch);
}

}

export default new RecommendService()