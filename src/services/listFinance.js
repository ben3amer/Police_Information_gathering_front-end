import http from "../http-common-finance";

class ListFinanceDataService{
    getAll(page = 0){
        return http.get(`?page=${page}`);
    }

    get(id){
        return http.get(`/id/${id}`);
    }

    find(query, by = "cin", page = 0){
        return http.get(`?${by}=${query}&page=${page}`);
    }

    createInfraction(data){
        return http.post("/ministerfinance", data); 
    }


}

export default new ListFinanceDataService();