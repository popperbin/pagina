import React from "react";
import "../styles/Info.css";

const EnergyCard = ({ title, description, advantages, disadvantages }) => (
  <div className="energy-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="energy-details">
      <h4>Ventajas</h4>
      <ul>
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>
      <h4>Desventajas</h4>
      <ul>
        {disadvantages.map((disadvantage, index) => (
          <li key={index}>{disadvantage}</li>
        ))}
      </ul>
    </div>
  </div>
);

function Info() {
  const energyData = [
    {
      title: "Energía solar",
      description:
        "Utiliza la radiación solar para generar electricidad o calor. Los sistemas más comunes son los paneles fotovoltaicos (para generar electricidad) y los colectores solares térmicos (para calefacción o agua caliente).",
      advantages: [
        "Inagotable, baja huella de carbono y fácil de instalar en techos y terrenos.",
      ],
      disadvantages: [
        "Depende de la disponibilidad de luz solar, por lo que su eficiencia puede reducirse en días nublados o durante la noche.",
      ],
    },
    {
      title: "Energía eólica",
      description:
        "Aprovecha la energía del viento para mover turbinas que generan electricidad. Es especialmente eficiente en áreas con vientos fuertes y constantes.",
      advantages: [
        "Sostenible, produce electricidad de manera eficiente.",
        "No produce emisiones directas.",
      ],
      disadvantages: [
        "Impacto visual y acústico.",
        "La producción depende de la velocidad del viento.",
      ],
    },
    {
      title: "Energía hidroeléctrica",
      description:
        "Utiliza el flujo de agua (generalmente de ríos o embalses) para mover turbinas y generar electricidad.",
      advantages: [
        "Alta eficiencia energética.",
        "Capacidad de almacenamiento de energía (a través de embalses).",
      ],
      disadvantages: [
        "Requiere grandes infraestructuras.",
        "Puede tener impactos ambientales negativos, como la alteración de ecosistemas acuáticos.",
      ],
    },
    {
      title: "Energía geotérmica",
      description:
        "Aprovecha el calor almacenado en el interior de la Tierra para generar electricidad o calefacción directa.",
      advantages: [
        "Fuente de energía constante y fiable, ya que la temperatura terrestre es relativamente estable.",
      ],
      disadvantages: [
        "Requiere de recursos geotérmicos accesibles.",
        "Su desarrollo puede ser costoso en áreas no geotérmicamente activas.",
      ],
    },
    {
      title: "Biomasa",
      description:
        "Utiliza materia orgánica (madera, residuos agrícolas, restos de alimentos, etc.) para generar energía, ya sea en forma de calor, electricidad o biocombustibles líquidos.",
      advantages: [
        "Reduce residuos y puede generar energía de manera local.",
      ],
      disadvantages: [
        "Puede competir con la producción de alimentos y el uso de tierras agrícolas.",
        "Su combustión puede generar emisiones si no se gestiona de manera adecuada.",
      ],
    },
    {
      title: "Energía mareomotriz y undimotriz",
      description:
        "Aprovechan la energía del movimiento de las olas y las mareas para generar electricidad.",
      advantages: [
        "Energía predecible y con gran potencial en zonas costeras.",
      ],
      disadvantages: [
        "Tecnologías aún en fase de desarrollo.",
        "Alto costo y posible impacto en los ecosistemas marinos.",
      ],
    },
  ];

  return (
    <section className="info-section my-4">
      <h2>Información sobre Energías Renovables</h2>
      {energyData.map((energy, index) => (
        <EnergyCard
          key={index}
          title={energy.title}
          description={energy.description}
          advantages={energy.advantages}
          disadvantages={energy.disadvantages}
        />
      ))}
    </section>
  );
}

export default Info;

