import React from "react";
import { ProjectsItems } from "./ProjectsItems";
import "./style.css";

function Projects() {
  const projectsData = ProjectsItems.map((item, index) => {
    return (
      <div className="col-lg-4 col-md-6 mt-4" key={index}>
        <section className="cardContainer" >
          <h5 className="titleCard">{item.title}</h5>
          <div className="card-img-container">
            <div>
              <h6>Herramientas usadas:</h6>
              <p className="item-herramientas">{item.herramientas}</p>
            </div>
            <img className="desvanecer" src={item.image} alt="project img" />
          </div>
          <p>{item.description}</p>
          <div className="botonView">
            <button className="buttonProjects">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="articleCv"
              >
                VER DEMO
              </a>
            </button>
            <button className="buttonProjects">
              <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="articleCv"
              >
                VER CODIGO
              </a>
            </button>
          </div>
        </section>
      </div>
    );
  });

  return (
    <div id="proyectos">
      <h1 className="titleProyect">PROYECTOS</h1>
      <section className="containerProject">
        <section className="cards">
          <div className="container">
            <div className="row">{projectsData}</div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Projects;
