import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Sección de enlaces de navegación */}
          <div className="col-md-4">
            <h5>Navegación</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Inicio</a></li>
              <li><a href="#about" className="text-white">Sobre Nosotros</a></li>
              <li><a href="#services" className="text-white">Servicios</a></li>
              <li><a href="#contact" className="text-white">Contacto</a></li>
            </ul>
          </div>
          
          {/* Sección de redes sociales */}
          <div className="col-md-4 text-center">
            <h5>Síguenos</h5>
            <div>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Sección de información de contacto */}
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: info@ejemplo.com</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Dirección: Calle Falsa 123, Ciudad</p>
          </div>
        </div>
        
        {/* Nota final */}
        <div className="text-center mt-3">
          <small>&copy; 2024 FUTURE ENERGY. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
