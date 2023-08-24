import axios from "axios"

const MATCH_DEMANDS_URL = 'http://10.236.173.154:8080'

class MatchingDemandsService {
    getMatchedDemands(id){
        return axios.get(MATCH_DEMANDS_URL+"/demands/match/"+id);
    }
}

export default new MatchingDemandsService()