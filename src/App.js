import React, { useState } from 'react';
import UnitInput from './UnitInput';
import './App.css';

const App = () => {
  const [centimeters, setCentimeters] = useState('');
  const [millimeters, setMillimeters] = useState('');

  const handleCentimetersChange = (value) => {
    setCentimeters(value);
    setMillimeters(value * 10);
  };

  const handleMillimetersChange = (value) => {
    setMillimeters(value);
    setCentimeters(value / 10);
  };

  const isOverOneMeter = centimeters >= 100 || millimeters >= 1000;

  return (
    <div className="container">
      <h1>Unit converter</h1>
      <UnitInput unit="Centimetres" value={centimeters} onChange={handleCentimetersChange} />
      <UnitInput unit="Millimetres" value={millimeters} onChange={handleMillimetersChange} />
      {isOverOneMeter && <p className="message">Length is bigger than 1 metre!</p>}
    </div>
  );
};

export default App;
