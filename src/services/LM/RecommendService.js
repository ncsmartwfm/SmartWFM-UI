import axios from "axios"

const API_BASE_URL = 'http://10.230.24.183:8080'

class RecommendService {
    getRecommendation(){
        return axios.get(API_BASE_URL+"/match");
    }
}

export default new RecommendService()