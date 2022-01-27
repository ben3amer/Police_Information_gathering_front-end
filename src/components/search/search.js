
import React, { useEffect, useState } from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/footer";
import ListFinanceDataService from "../../services/listFinance";
import ListInterieurDataService from "../../services/listInterieur";
import { Button , Form } from 'react-bootstrap';
import "./search.css";

const Search = props => {
    const [listFinance, setListFinance] = useState([  {
        cin :'11405023',
        name:'mohamed amine',
        lastname :'ben ameur',
        infraction:'100DT'
        }
        ,
        {
            cin :'11405023',
            name:'mohamed amine',
            lastname :'ben ameur',
            infraction:'200DT'
            }
        ]);
    const [listInterieur,setListInterieur] = useState([ 
        {
        cin :'11405023',
        name:'mohamed amine',
        lastname :'ben ameur',
        infraction:'type1'
        }
        ,  
        {
            cin :'11405023',
            name:'mohamed amine',
            lastname :'ben ameur',
            infraction:'type2'
        }
      ]);
    const [cin, setSearchCIN] = useState("");

    useEffect(() =>{
      retrieveListFinance();
      retrieveListInterieur();
    }, []);

  const retrieveListFinance = () => {
    ListFinanceDataService.getAll()
    .then(response => {
      console.log(response.data);
      setListFinance(response.data.listFinance);
    })
    .catch(e => {
      console.log(e);
    });
  };
  const retrieveListInterieur = () => {
    ListInterieurDataService.getAll()
    .then(response => {
      console.log(response.data);
      setListInterieur(response.data.ListInterieur);
    })
    .catch(e => {
      console.log(e);
    });
  };
  
  const refreshList = () => {
    retrieveListFinance ();
    retrieveListInterieur();
  };

  const findFinance = (query,  by) => {
    ListFinanceDataService.find(query, by)
    .then(response =>{
      console.log(response.data);
      setListFinance(response.data.ListFinance);
    })
    .catch(e => {
      console.log(e);
    });
  };


  const findInterieur = (query,  by) => {
    ListInterieurDataService.find(query, by)
    .then(response =>{
      console.log(response.data);
      setListInterieur(response.data.ListInterieur);
    })
    .catch(e => {
      console.log(e);
    });
  };

    const findByCIN  = (event) => {
        console.log(cin);
        event.preventDefault();
    if(!cin){
      alert("CIN is required ! ");
    }
    else {
        var test = 0 ;
        var length = cin.length;
        for(var i = 0 ;  !test && i < length ;++i){
            if(isNaN(cin[i])){
                alert("CIN incorrect");
                test = 1 ;
            }
        }
        if(!test) {
            //traitement en cas de succes
            //refreshList();
            findFinance(cin, "cin");
            findInterieur(cin, "cin");
        }
      
    }
}
    
    return (
        <div>
        <div className="home">  
            <Form onSubmit={findByCIN}>
                <Form.Group className="mb-4" >
                    <Form.Control 
                    className ="search_input" 
                    type="text" 
                    name="cin" 
                    placeholder="Enter the national ID card number."
                    value={cin} 
                    onChange={(e) => setSearchCIN(e.target.value)} />
                </Form.Group>
                
                    <Button  className="search_button" variant="primary"  type="submit">
                        Search
                    </Button>
            </Form>
            <div className="row">
            <div className="col-lg-6 pb-1">
               {listInterieur.map((infraction_interieur) => {
                   return (
                       <div className="row">
                           <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Infraction de ministere d'interieur</h5>
                                    <p className="card-text">
                                        <strong>CIN: </strong>{infraction_interieur.cin}<br/>
                                        <strong>Name: </strong>{infraction_interieur.name}<br/>
                                        <strong>Lastname: </strong>{infraction_interieur.lastname}<br/>
                                        <strong>Infraction: </strong>{infraction_interieur.infraction}
                                    </p>
                                </div>
                            </div>   
                       </div>
                   );
               })
               }
            </div>
            <div className="col-lg-6 pb-1">
               {listFinance.map((infraction_finance) => {
                   return (
                       <div className="row">
                           <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Infraction de ministere de finance</h5>
                                    <p className="card-text">
                                        <strong>CIN: </strong>{infraction_finance.cin}<br/>
                                        <strong>Name: </strong>{infraction_finance.name}<br/>
                                        <strong>Lastname: </strong>{infraction_finance.lastname}<br/>
                                        <strong>Infraction: </strong>{infraction_finance.infraction}
                                    </p>
                                </div>
                            </div>   
                       </div>
                   );
               })
               }
            </div>
        </div>
        </div>
        </div>
    );
}
export default Search;
