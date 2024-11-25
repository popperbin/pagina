import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import Footer from "./components/Footer";
import Introduction from "./components/Introduccion";
import EnergyCalculator from "./components/Calculadora";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Info from "./components/Info.js";
import "./App.css";
import EnergyDataTable from "./components/Tabla.js";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* Título principal */}
        <main>
        {/* Sección de introducción */}
        <Introduction />

        {/* Sección de información */}
        <Info />
        
        <EnergyDataTable />
        {/* Formulario para calcular consumo */}
        <div id="calculadora">
            <EnergyCalculator />
          </div>

        {/* Dashboard para gráficos */}
        <div id="dashboard">
            <Dashboard />
          </div>

        </main>
        {/* Otros componentes y contenido de la página */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
