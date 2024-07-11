import React, { useState } from 'react';
import OhmsLaw from './OhmsLaw'; // Assuming OhmsLaw class is in the same directory

const OhmsLawComponent = () => {
    const [ohm, setOhm] = useState(new OhmsLaw(null, 2, 10));
    const [voltage, setVoltage] = useState(ohm.voltage);
    const [current, setCurrent] = useState(ohm.current);
    const [resistance, setResistance] = useState(ohm.resistance);

    const handleVoltageChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        ohm.setVoltage(value);
        setVoltage(value);
        setCurrent(ohm.current);
        setResistance(ohm.resistance);
    };

    const handleCurrentChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        ohm.setCurrent(value);
        setVoltage(ohm.voltage);
        setCurrent(value);
        setResistance(ohm.resistance);
    };

    const handleResistanceChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        ohm.setResistance(value);
        setVoltage(ohm.voltage);
        setCurrent(ohm.current);
        setResistance(value);
    };

    return (
        <div>
            <h3>Ohm's Law Calculator</h3>
            <div>
                <label>
                    Voltage (V):
                    <input 
                        type="number" 
                        value={voltage || ''} 
                        onChange={handleVoltageChange} 
                        placeholder="Voltage" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Current (I):
                    <input 
                        type="number" 
                        value={current || ''} 
                        onChange={handleCurrentChange} 
                        placeholder="Current" 
                    />
                </label>
            </div>
            <div>
                <label>
                    Resistance (R):
                    <input 
                        type="number" 
                        value={resistance || ''} 
                        onChange={handleResistanceChange} 
                        placeholder="Resistance" 
                    />
                </label>
            </div>
            <div>
                <p>Voltage: {voltage}</p>
                <p>Current: {current}</p>
                <p>Resistance: {resistance}</p>
            </div>
        </div>
    );
};

export default OhmsLawComponent;
