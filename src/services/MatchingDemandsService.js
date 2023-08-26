import axios from "axios"

const MATCH_DEMANDS_URL = 'http://10.230.24.183:8080'

class MatchingDemandsService {
    getMatchedDemand(id){
        return axios.get(MATCH_DEMANDS_URL+"/demands/match/"+id);
    }    
    getMatchedDemands(){
        return axios.get(MATCH_CANDIDATES_URL+"/candidates/match");
    }
}

export default new MatchingDemandsService()