import axios from "axios";

export default axios.create({
    baseURL : "http:localhost:9000/minister_interieur/agent",
    headers :{
        "Content-type" : "application/json"
    }
});