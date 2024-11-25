import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo o título del proyecto */}
        <a className="navbar-brand h3 mb-0" href="#inicio">
          SwiftByte
        </a>

        {/* Botón colapsable */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#inicio" className="nav-link text-white">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#informacion" className="nav-link text-white">
                Información
              </a>
            </li>
            <li className="nav-item">
              <a href="#calculadora" className="nav-link text-white">
                Calculadora
              </a>
            </li>
            <li className="nav-item">
              <a href="#dashboard" className="nav-link text-white">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
