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
      <h1>Конвертер одиниць вимірювання</h1>
      <UnitInput unit="Сантиметри" value={centimeters} onChange={handleCentimetersChange} />
      <UnitInput unit="Міліметри" value={millimeters} onChange={handleMillimetersChange} />
      {isOverOneMeter && <p className="message">Довжина більше 1 метра!</p>}
    </div>
  );
};

export default App;
