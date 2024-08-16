import React, { useState } from 'react';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {
  const [reservationData, setReservationData] = useState({
    vehicleType: '',
    customerName: '',
    startDate: '',
    endDate: '',
  });

  return (
    <div className="App">
      <h1>Alquiler de Vehículos Rayo McQueen</h1>
      <Form setReservationData={setReservationData} />
      {reservationData.vehicleType && (
        <Card
          vehicleType={reservationData.vehicleType}
          customerName={reservationData.customerName}
          startDate={reservationData.startDate}
          endDate={reservationData.endDate}
        />
      )}
    </div>
  );
}

export default App;
