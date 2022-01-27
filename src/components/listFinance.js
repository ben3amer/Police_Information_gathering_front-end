import React, { useEffect, useState } from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer/footer";
import ListFinanceDataService from "../services/listFinance";


const ListFinance = props => {
  const [listFinance, setListFinance] = useState([]);
  const [searchCIN, setSearchCIN] = useState("");
  
  useEffect(() =>{
    retrieveListFinance();
  }, []);

  const onChangeSearchCIN = e =>{
    const searchCIN = e.target.value;
    setSearchCIN(searchCIN);
  };

  const retrieveListFinance = () => {
    ListFinanceDataService.getAll()
    .then(response => {
      console.log(response.data);
      setListFinance(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };
  
  const refreshList = () => {
    retrieveListFinance ();
  };

  const find = (query,  by) => {
    ListFinanceDataService.find(query, by)
    .then(response =>{
      console.log(response.data);
      setListFinance(response.data.ListFinance);
    })
    .catch(e => {
      console.log(e);
    });
  };

  const findByCIN = () => {
    find(searchCIN, "cin");
  };

  return(
    <div>
      <div className="row">
        <div 
          className="input-group col-lg-4" >
          <input
            type ="text"
            className="form-control"
            placeholder="Search by CIN"
            value={searchCIN}
            onChange={onChangeSearchCIN}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCIN} >
              Search
            </button>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default ListFinance;
