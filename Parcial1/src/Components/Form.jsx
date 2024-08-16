import React, { useState } from 'react';

const Form = ({ setReservationData }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorType, setErrorType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customerName.trim().length < 3 || customerName.startsWith(' ')) {
      setErrorName('El nombre debe ser mayor a 3 caracteres');
      return;
    } else {
      setErrorName('');
    }
    

    if (vehicleType.trim().length < 6) {
      setErrorType('El tipo de vehiculo debe ser mayor a 6 caracteres');
      return;
    }else {
      setErrorType('');
    }

    setCustomerName('');
    setVehicleType('');
    setStartDate('');
    setEndDate('');
    setReservationData({
      vehicleType,
      customerName,
      startDate,
      endDate,
    });

    alert('Reserva realizada con éxito');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
          {errorName && <p>{errorName}</p>}
        <input
          type="text"
          placeholder="Tipo de vehículo (ej. Sedán, SUV)"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        />
           {errorType && <p>{errorType}</p>}
        <input
          type="date" 
          placeholder="Fecha de inicio"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date" 
          placeholder="Fecha de finalización"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Reservar</button>
      </form>

    </div>
  );
};

export default Form;
