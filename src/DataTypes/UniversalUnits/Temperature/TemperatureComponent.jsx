import React, { useState } from 'react';
import Temperature from './Temperature'; // Assuming Temperature class is in the same directory

const TemperatureComponent = () => {
    const [fahrenheit, setFahrenheit] = useState(32);
    const [temperature, setTemperature] = useState(new Temperature(fahrenheit));

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setTemperature(new Temperature(parseFloat(value)));
    };

    return (
        <div>
            <h3>Temperature Converter</h3>
            <input 
                type="number" 
                value={fahrenheit} 
                onChange={handleFahrenheitChange} 
                placeholder="Fahrenheit" 
            />
            <div>
                <p>Celsius: {temperature.celsius}</p>
                <p>Kelvin: {temperature.kelvin}</p>
            </div>
        </div>
    );
};

export default TemperatureComponent;
