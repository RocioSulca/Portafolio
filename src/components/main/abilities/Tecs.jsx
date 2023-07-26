import React from "react";
import "./tecs.css";
import { TecsImg } from "./TecsImg";

export default function Tecs() {
  const projectsData = TecsImg.map((item, index) => {
    return (
      <div className="col-lg-3 col-md-4 col-6" key={index}>
        <section className="cardTec" >
          <div className="card-img-container">
            <img src={item.img} alt="project img" />
          </div>
          <p className="titleCard">{item.title}</p>
        </section>
      </div>
    );
  });

  return (
    <div>
      <div className="container mt-5">
        <div className="row">{projectsData}</div>
      </div>
    </div>
  );
}
