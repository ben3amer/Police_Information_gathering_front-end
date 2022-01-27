import axios from "axios";

export default axios.create({
    baseURL : "http:localhost:8000/minister_finance",
    headers :{
        "Content-type" : "application/json"
    }
});