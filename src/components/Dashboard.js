import React from "react";
import "../styles/Dashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function Dashboard() {
  const data = {
    labels: ["Solar", "Eólica", "Hidroeléctrica", "Geotérmica", "Biomasa"],
    datasets: [
      {
        label: "Producción estimada (kWh)",
        data: [500, 300, 200, 100, 150], // Datos de ejemplo
        backgroundColor: [
          "#FFA500",
          "#87CEEB",
          "#4682B4",
          "#32CD32",
          "#8B4513",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "400px" }}>
      <h2>Dashboard de Energía Renovable</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Dashboard;
