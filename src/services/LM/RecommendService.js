import axios from "axios"

const API_BASE_URL = 'http://10.230.24.183:8080'

class RecommendService {
    updateRecommendation(demandCandidateMatch){
        return axios.put('http://10.230.24.183:8080/candidates/match', demandCandidateMatch);

    //     return axios.put(API_BASE_URL+'candidates/match', 
	// { 
	// 	name: 'name', 
	// 	date: 'date' 
	// });
}
}

export default new RecommendService()