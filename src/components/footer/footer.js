import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css"; 

function Footer() {
  return (
    <div className="Footer">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>
    <footer className="bg-dark text-center text-white">
    
    <div className="container p-4 pb-0">

      <section className="mb-4">
        
        <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com/" role="button"
          ><i className="fab fa-facebook-f"></i ></a>
  
        
        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"
          ><i className="fab fa-twitter"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="https://google.com/" role="button"
          ><i className="fab fa-google"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/" role="button"
          ><i className="fab fa-instagram"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/" role="button"
          ><i className="fab fa-linkedin-in"></i></a>
  
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button"
          ><i className="fab fa-github"></i ></a>

      </section>
    </div>

    <div className="text-center p-3" >
      © 2022 Copyright
      <a className="text-white" href="http://www.isi.rnu.tn/"> </a>
    </div>

  </footer>
  </div>
  );
}

export default Footer;