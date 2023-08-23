import axios from "axios"

const LOGIN_API_BASE_URL = 'http://localhost:8090/api/login'

class EmployeeService {
    getLoginResponse(){
        return axios.get(LOGIN_API_BASE_URL);
    }
}

export default new EmployeeService()