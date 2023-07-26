import React from "react";
import fotoprueba from "../../assets/fotoprueba.png"
import "./style.css";

export default function Inicial() {

  return (
    <div className="container containerInicial">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 d-flex flex-column ">
          <h1 className="display-1 inicial">¡Hola!,</h1>
          <h1 className="display-1">Soy Rocio</h1>
          <p className="p-program">Frontend Developer Junior</p>
        </div>
        <div className="col-md-6 d-flex justify-content-center imgContainer">
          <img src={fotoprueba} alt="foto" className="imgCv" />
        </div>
      </div>
    </div>
  );
}
