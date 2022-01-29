import http from "../http-common-login";

class LoginDataService{
    getAll(page = 0){
        return http.get(`?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(cin,password,){
        return http.get(`${cin}/${password}`);
    }


}

export default new LoginDataService();