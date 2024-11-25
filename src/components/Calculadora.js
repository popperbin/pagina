import React, { useState } from "react";

function EnergyCalculator() {
  const [consumo, setConsumo] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleCalcular = (e) => {
    e.preventDefault();
    const energiaSolar = (consumo * 0.8).toFixed(2); // Ejemplo: 80% del consumo cubierto por solar
    const energiaEolica = (consumo * 0.6).toFixed(2); // Ejemplo: 60% del consumo cubierto por eólica
    setResultado({ energiaSolar, energiaEolica });
  };

  return (
    <section className="my-4">
      <h2>Calculadora de Energía</h2>
      <form onSubmit={handleCalcular}>
        <div className="form-group">
          <label htmlFor="consumo">Consumo Eléctrico Total (kWh):</label>
          <input
            type="number"
            className="form-control"
            id="consumo"
            placeholder="Introduce tu consumo en kWh"
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Calcular
        </button>
      </form>
      {resultado && (
        <div className="mt-4">
          <h4>Resultados:</h4>
          <p><strong>Energía Solar:</strong> {resultado.energiaSolar} kWh</p>
          <p><strong>Energía Eólica:</strong> {resultado.energiaEolica} kWh</p>
        </div>
      )}
    </section>
  );
}

export default EnergyCalculator;
