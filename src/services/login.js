import http from "../http-common";

class LoginDataService{
    getAgent(id){
        return http.get(`agent/id/${id}`);
    }
}

export default new LoginDataService;