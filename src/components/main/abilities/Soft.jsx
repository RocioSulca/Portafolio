import React from "react";
import responsabilidad from "../../../assets/responsabilidad.jpg";
import trabajoEquipo from "../../../assets/trabajoEquipo.jpg";
import versatilidad from "../../../assets/versatilidad.jpg";

export default function Soft() {
  return (
    <div className="container mt-5">
      <section className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card-img-container">
            <img src={trabajoEquipo} alt="imagen trabajo en equipo" />
          </div>
          <h6 className="softTitle mt-3">TRABAJO EN EQUIPO</h6>
          <p className="d-flex justify-content-center">
            Me adapto rápidamente al equipo que se me asigna y me gusta
            compartir lo aprendido.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card-img-container">
          <img src={responsabilidad} alt="imagen responsabilidad" />
          </div>
          <h6 className="softTitle mt-3">RESPONSABILIDAD</h6>
          <p>
            Me gusta cumplir con todo lo que se me asigna sin dejar las cosas a
            medias.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card-img-container">
          <img src={versatilidad} alt="imagen responsabilidad" />
          </div>
          <h6 className="softTitle mt-3">AUTOAPRENDIZAJE</h6>
          <div className="d-flex justify-content-center">
          <p >
          Me gusta aprender constantemente, descubrir nuevas cosas y expandir mi conocimiento 
          de manera autónoma.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
}
