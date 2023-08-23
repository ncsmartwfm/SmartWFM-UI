import axios from "axios"

const LOGIN_API_BASE_URL = 'http://10.236.173.154:8080'

class LoginService {
    getLoginResponse(){
        return axios.get(LOGIN_API_BASE_URL+"/api/login");
    }
}

export default new LoginService()