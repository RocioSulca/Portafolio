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
            Soy una apasionada desarrolladora Frontend. Me encanta aprender constantemente y afrontar nuevos retos. Cuento con experiencia en el desarrollo de proyectos web colaborativos, empleando metodologías ágiles y utilizando HTML5, CSS3 y JavaScript. Siempre busco soluciones creativas y eficientes para los desafíos técnicos que se me presentan.
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
