import React from "react";
import Cv from "../../assets/cvrocio.pdf";

import "./style.css";

function AboutMe() {
  return (
    <div className="container-aboutMe probando" id="sobreMi">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h1 className="titleProyect">SOBRE MI</h1>
            <p className="text-aboutMe">
              ¡Hola! Soy una apasionada desarrolladora Front-End con background en Economía. Poseo una valiosa 
              experiencia en el desarrollo de proyectos web colaborativos, empleando metodologías ágiles, HTML5, 
              CSS3 y JavaScript, con un enfoque especializado en el framework React. Soy una persona altamente proactiva, 
              siempre buscando soluciones creativas y eficientes para los desafíos técnicos que se me presentan. 
              Disfruto trabajando en equipo y valoro la colaboración y la comunicación efectiva para lograr resultados excepcionales. 
              Me gusta aprender cosas nuevas cada día, siempre buscando oportunidades para mejorar mis habilidades y conocimientos 
              en el desarrollo web. Estoy emocionada por seguir creciendo como desarrolladora y contribuir a proyectos innovadores 
              que tengan un impacto positivo en el mundo digital.
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
