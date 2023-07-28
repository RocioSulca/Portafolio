import React from "react";
import { MenuItems } from "./MenuItems.js";
import "./navBar.css";

function NavBar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg prueba px-3 zindex-fixed:1300">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav">
              {MenuItems.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default NavBar;

