import React from "react";
import Cv from "../../assets/cvrocio.pdf";

import "./style.css";

function AboutMe() {
  return (
    <div className="container-aboutMe probando" id="sobreMi">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="titleProyect title">SOBRE MI</h1>
            <p className="text-aboutMe">
              ¡Hola! Soy una apasionada desarrolladora Front-End, con experiencia en el desarrollo de proyectos web colaborativos, empleando metodologías ágiles, HTML5,
              CSS3 y JavaScript, con el framework React. Siempre estoy buscando soluciones creativas y eficientes para los desafíos técnicos
              que se me presentan. Me gusta aprender cosas nuevas cada día, siempre buscando oportunidades para mejorar mis habilidades y conocimientos
              en el desarrollo web.
            </p>
            <div className="buttonContactme mb-5">
              <a className="btn btn-primary buttonCv" href={Cv}
                target="_blank"
                rel="noreferrer" role="button">VER CV<i className="fas fa-download icon"></i></a>
              <a className="btn btn-primary buttonCv" href="#contactame"
                rel="noreferrer" role="button">CONTACTAME<i className="fas fa-id-badge icon"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
