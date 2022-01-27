import React,{useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ListFinance from "../listFinance";
import './addInfraction.css';
import { Button , Form } from 'react-bootstrap';
import Footer from "../footer/footer";


const AddInfraction = props =>{
  const[cin, setCin] = useState("");
  const[name, setName] = useState("");
  const[lastname, setLastname] = useState("");
  const[infraction_finance, setInfraction_finance] = useState("");
  const[infraction_interieur, setInfraction_interieur] = useState("");
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!cin){
      alert("CIN is required ! ");
    }
    else if (!name){
      alert("name is required ! ");
    }
    else if (!lastname){
      alert("lastname is required ! ");
    }
    else if (!infraction_finance){
      alert("Finance minister infraction is required ! ");
    }
    else if (!infraction_interieur){
      alert("Interior minister infraction is required ! ");
    }
    else{
      var test = 0 ;
      var length = cin.length;
      for(var i = 0 ;  !test && i < length ;++i){
          if(isNaN(cin[i])){
              alert("CIN incorrect");
              test = 1 ;
          }
      }
      if(!test) {
          // traitement en cas de succes
          const  new_infraction_finance =
          {
            cin : cin,
            name : name,
            lastname:lastname,
            infraction: infraction_finance 
          }
          
          const  new_infraction_interieur =
          {
            cin : cin,
            name : name,
            lastname:lastname,
            infraction: infraction_interieur 
          }
          console.log(new_infraction_finance);
          console.log(new_infraction_interieur);
          fetch("http://localhost:8000/ministere_finance/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(new_infraction_finance),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
          fetch("http://localhost:9000/ministere_interieur/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(new_infraction_interieur),
          })
          .catch(error => {
            window.alert(error);
            return;
          });
          setCin("");
          setName("");
          setLastname("");
          setInfraction_finance("");
          setInfraction_interieur("");
          Navigate('/search');
        }
    }
  }

  return (
    <div >
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4" >
        <Form.Control 
        className ="search_input" 
        name="cin" 
        type="text" 
        placeholder="National ID card number."
        value={cin}
        onChange={(e) => setCin(e.target.value)}
         />
        <Form.Control 
          className ="search_input2"
          name="firstname" 
          type="text" 
          placeholder="First name."
          value={name}
          onChange={(e) => setName(e.target.value)} 
           />
        <Form.Control 
        className ="search_input2" 
        name="lastname" 
        type="text" 
        placeholder="Last name."
         value={lastname}
         onChange={(e) => setLastname(e.target.value)}
          />
        <Form.Control 
        className ="search_input2" 
        name="infraction_finance" 
        type="text" 
        placeholder="Finance minister infraction"
        value={infraction_finance}
        onChange={(e) =>setInfraction_finance(e.target.value)} />
    
    <Form.Control 
        className ="search_input2" 
        name="infraction_interieur" 
        type="text" 
        placeholder="Finance minister interieur"
        value={infraction_interieur}
        onChange={(e) =>setInfraction_interieur(e.target.value)} />
    
      </Form.Group>
      <Button variant="primary"  className="search_button" type="submit">
        Add
      </Button>
    </Form>
     <Footer />
     </div>
  );
}

export default AddInfraction;
