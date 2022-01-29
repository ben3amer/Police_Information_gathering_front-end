import http from "../http-common-interieur";

class ListInterieurDataService{
 
    find(query, by = "cin"){
        return http.get(`${query}`);
    }

    createInfraction(data){
        return http.post("/interieur", data); 
    }

}

export default new ListInterieurDataService();