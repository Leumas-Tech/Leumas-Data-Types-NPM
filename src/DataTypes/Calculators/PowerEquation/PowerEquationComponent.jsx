import { useState } from 'react';
import Power from './PowerEquation'; // Assuming Power class is in the same directory

const PowerComponent = () => {
    const [power, setPower] = useState(new Power(null, 120, 2));
    const [powerValue, setPowerValue] = useState(power.power);
    const [voltage, setVoltage] = useState(power.voltage);
    const [current, setCurrent] = useState(power.current);

    const handlePowerChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        power.setPower(value);
        setPowerValue(value);
        setVoltage(power.voltage);
        setCurrent(power.current);
    };

    const handleVoltageChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        power.setVoltage(value);
        setPowerValue(power.power);
        setVoltage(value);
        setCurrent(power.current);
    };

    const handleCurrentChange = (e) => {
        const value = e.target.value ? parseFloat(e.target.value) : null;
        power.setCurrent(value);
        setPowerValue(power.power);
        setVoltage(power.voltage);
        setCurrent(value);
    };

    return (
        <div>
            <h3>Power Calculator</h3>
            <div>
                <label>
                    Power (P):
                    <input 
                        type="number" 
                        value={powerValue || ''} 
                        onChange={handlePowerChange} 
                        placeholder="Power" 
                    />
                </label>
            </div>
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
                <p>Power: {powerValue}</p>
                <p>Voltage: {voltage}</p>
                <p>Current: {current}</p>
            </div>
        </div>
    );
};

export default PowerComponent;
