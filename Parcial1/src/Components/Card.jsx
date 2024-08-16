import React from "react";

const Card = ({ vehicleType, customerName, startDate, endDate }) => {
  return (
    <div>
      <h2>Datos de la Reserva:</h2>
      <p>Cliente: {customerName}</p>
      <p>Tipo de vehículo: {vehicleType}</p>
      <p>Fecha de inicio: {startDate}</p>
      <p>Fecha de finalización: {endDate}</p>
    </div>
  );
};

export default Card;
