import http from "../http-common-finance";

class ListFinanceDataService{


    find(query, by = "cin"){
        return http.get(`${query}`);
    }

    createInfraction(data){
        return http.post("/finance", data); 
    }


}

export default new ListFinanceDataService();