import React from "react";
import "../styles/Introduccion.css";

function Introduction() {
  return (
    <section className="introduction-section">
      <div className="intoduction-content">
        <h1>Hacia un Futuro Energético Sostenible</h1>
        <p>
          Únete a la transición hacia un planeta más limpio y justo mediante soluciones energéticas sostenibles.
        </p>
        <a href="#info" className="btn btn-primary">Explorar más</a>
      </div>
    </section>
  );
}

export default Introduction;
