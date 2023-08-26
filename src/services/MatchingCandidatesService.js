import axios from "axios"

const MATCH_CANDIDATES_URL = 'http://10.230.24.183:8080'

class MatchingCandidatesService {
    getMatchedCandidate(id){
        return axios.get(MATCH_CANDIDATES_URL+"/candidates/match/"+id);
    }
    getMatchedCandidates(){
        return axios.get(MATCH_CANDIDATES_URL+"/candidates/match");
    }
}

export default new MatchingCandidatesService()