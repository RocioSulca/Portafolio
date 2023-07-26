import React from "react";
import "./style.css";

export default function Contact() {
  return (
    <div className="container" id='contactame'>
        <h1 className='titleProyect contactTitle'>CONTÁCTAME</h1>
      <section className="row d-flex justify-content-center">
        <div className="col-4 ml-5 squareContact">
          <h4>E-MAIL</h4>
          <p className="contactme">rociosulca.z@gmail.com</p>
        </div>
        <div className="col-4 mr-5 squareContact">
          <h4>CELULAR</h4>
          <p className="contactme">942748384</p>
        </div>
        <div className="col-4  squareContact">
          <h4>REDES SOCIALES</h4>
          <section className="icons">
            <a
              href="https://www.linkedin.com/in/rocio-sulca-zuloaga-a15179145/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/RocioSulca"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/kath.parthenopeus"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </section>
        </div>
      </section>
    </div>
  );
}
