import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

function EnergyDataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Leer el archivo CSV desde el directorio public
    Papa.parse('/archive/01 renewable-share-energy', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setData(result.data); // Guardar los datos en el estado
      },
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Año</th>
            <th>Fuente de Energía</th>
            <th>Capacidad Instalada (MW)</th>
            <th>Consumo Total (TWh)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{row.energySource}</td>
              <td>{row.installedCapacity}</td>
              <td>{row.totalConsumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnergyDataTable;
