import React from 'react';
import './App.css';

const UnitInput = ({ unit, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>
        {unit}:
        <input 
          type="number" 
          value={value} 
          onChange={handleChange} 
          className="input"
        />
      </label>
    </div>
  );
};

export default UnitInput;
