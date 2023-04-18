import axios from 'axios'

class AuthenticationDataService{

    getUser(userId){
        return axios.get(`http://localhost:8087/api/v1/login/${userId}`);
    }

}

export default new AuthenticationDataService();
