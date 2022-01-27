import http from "../http-common-login";

class LoginDataService{
    getAll(page = 0){
        return http.get(`?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(query, by = "cin", page = 0){
        return http.get(`?${by}=${query}&page=${page}`);
    }


}

export default new LoginDataService();