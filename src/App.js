import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mt-5">
      {/* Título principal */}
      <h1 className="text-center">ENERGY FUTURE</h1>

      {/* Sección de introducción */}
      <section className="my-4">
        <h2>Introducción</h2>
        <p>
          {/* Descripción de la introducción */}
          {/* Colocar aquí la introducción del proyecto */}
          Las energías renovables son fuentes de energía que se obtienen de recursos naturales capaces de regenerarse de manera continua y no se agotan con el tiempo. Estas energías tienen un impacto ambiental mucho menor en comparación con las fuentes tradicionales de energía, como los combustibles fósiles (carbón, petróleo, gas), ya que su aprovechamiento produce menos emisiones de gases de efecto invernadero.
        </p>
      </section>

      {/* Sección de información */}
      <section className="my-4">
        <h2>Información sobre Energías Renovables</h2>
        {/* Agrega aquí los elementos de contenido */}

        <h3 className="mb-0">1. Energía solar:</h3>
          <div className="card-body">
            <p>
              Utiliza la radiación solar para generar electricidad o calor. Los sistemas más comunes son los paneles fotovoltaicos (para generar electricidad) y los colectores solares térmicos (para calefacción o agua caliente).
            </p>
            <ul>
              <li><strong>Ventajas:</strong> Inagotable, baja huella de carbono y fácil de instalar en techos y terrenos.</li>
              <li><strong>Desventajas:</strong> Depende de la disponibilidad de luz solar, por lo que su eficiencia puede reducirse en días nublados o durante la noche.</li>
            </ul>
          </div>

        <h3 className="mb-0">2. Energía eólica: </h3>
        <div className="card-body">
          <p>
          Aprovecha la energía del viento para mover turbinas que generan electricidad. Es especialmente eficiente en áreas con vientos fuertes y constantes.
          </p>
          <ul>
            <li><strong>Ventajas:</strong>Sostenible, produce electricidad de manera eficiente y no produce emisiones directas. </li>
            <li><strong>Desventajas:</strong>Impacto visual y acústico, además de que la producción de energía depende de la velocidad del viento. </li>
          </ul>
        </div>

        <h3 className="mb-0">3. Energía hidroeléctrica: </h3>
        <div className="card-body">
          <p>
          Utiliza el flujo de agua (generalmente de ríos o embalses) para mover turbinas y generar electricidad.
          </p>
          <ul>
            <li><strong>Ventajas:</strong>Alta eficiencia energética y capacidad de almacenamiento de energía (a través de embalses). </li>
            <li><strong>Desventajas:</strong>Requiere grandes infraestructuras y puede tener impactos ambientales negativos, como la alteración de ecosistemas acuáticos. </li>
          </ul>
        </div>

        <h3 className="mb-0">4. Energía geotérmica: </h3>
        <div className="card-body">
          <p>
          Aprovecha el calor almacenado en el interior de la Tierra para generar electricidad o calefacción directa.
          </p>
          <ul>
            <li><strong>Ventajas:</strong>Fuente de energía constante y fiable, ya que la temperatura terrestre es relativamente estable. </li>
            <li><strong>Desventajas:</strong>Requiere de recursos geotérmicos accesibles y su desarrollo puede ser costoso en áreas no geotérmicamente activas. </li>
          </ul>
        </div>

        <h3 className="mb-0">5. Biomasa: </h3>
        <div className="card-body">
          <p>
          Utiliza materia orgánica (madera, residuos agrícolas, restos de alimentos, etc.) para generar energía, ya sea en forma de calor, electricidad o biocombustibles líquidos.
          </p>
          <ul>
            <li><strong>Ventajas:</strong>Reduce residuos y puede generar energía de manera local. </li>
            <li><strong>Desventajas:</strong>Puede competir con la producción de alimentos y el uso de tierras agrícolas. Además, su combustión puede generar emisiones si no se gestiona de manera adecuada. </li>
          </ul>
        </div>

        <h3 className="mb-0">6. Energía mareomotriz y undimotriz: </h3>
        <div className="card-body">
          <p>
            Aprovechan la energía del movimiento de las olas y las mareas para generar electricidad.
          </p>
          <ul>
            <li><strong>Ventajas:</strong>Energía predecible y con gran potencial en zonas costeras. </li>
            <li><strong>Desventajas:</strong>Tecnologías aún en fase de desarrollo, alto costo y posible impacto en los ecosistemas marinos. </li>
          </ul>
        </div>

      </section>

      {/* Formulario para calcular consumo */}
      <section className="my-4">
        <h2>Calculadora de Energía</h2>
        <form>
          <div className="form-group">
            <label htmlFor="consumo">Consumo Eléctrico Total (kWh):</label>
            <input
              type="number"
              className="form-control"
              id="consumo"
              placeholder="Introduce tu consumo en kWh"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Calcular
          </button>
        </form>
      </section>

      {/* Dashboard para gráficos */}
      <section className="my-4">
        <h2>Dashboard de Energía Renovable</h2>
        <p>
          {/* Aquí se pueden insertar gráficos usando bibliotecas como Chart.js */}
        </p>
      </section>
            {/* Otros componentes y contenido de la página */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
