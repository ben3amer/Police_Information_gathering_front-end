import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Login from "./components/login";
import AddInfraction from "./components/addInfraction";
import ListFinance from "./components/listFinance";


function Result() {
  return (
    <div className="App">
       
      <Footer />
    </div>
  );
}
export default Result;