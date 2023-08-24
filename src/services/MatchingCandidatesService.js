import axios from "axios"

const MATCH_CANDIDATES_URL = 'http://10.236.173.154:8080'

class MatchingCandidatesService {
    getMatchedCandidates(id){
        return axios.get(MATCH_CANDIDATES_URL+"/candidates/match/"+id);
    }
}

export default new MatchingCandidatesService()