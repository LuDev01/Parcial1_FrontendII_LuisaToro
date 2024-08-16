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
      setErrorType('El tipo de vehiculo debe ser tener por lo menos 6 caracteres');
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
  const inputStyle = {
    width: '100%',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: '2px solid #e1e5ee',
    fontFamily: 'inherit',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: 'transparent',
    outline: 'none',
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          style={inputStyle}
        />
          {errorName && <p>{errorName}</p>}
          
        </div>
        <div>
        <input
          type="text"
          placeholder="Tipo de vehículo (ej. Sedán, SUV)"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
                style={inputStyle}
        />
           {errorType && <p>{errorType}</p>}

        </div>
        <div>

        <input
          type="date" 
          placeholder="Fecha de inicio"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
                style={inputStyle}
        />
        </div>
        <div>

        <input
          type="date" 
          placeholder="Fecha de finalización"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
                style={inputStyle}
        />
        </div>
        <div>

        <button type="submit">Reservar</button>
        </div>
      </form>

    </div>
  );
};

export default Form;
