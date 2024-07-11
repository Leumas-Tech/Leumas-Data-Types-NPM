import { useState } from 'react';
import Energy from './Energy'; // Assuming Energy class is in the same directory

const EnergyComponent = () => {
    const [joules, setJoules] = useState(1000);
    const [energy, setEnergy] = useState(new Energy(joules));

    const handleJoulesChange = (e) => {
        const value = e.target.value;
        setJoules(value);
        setEnergy(new Energy(parseFloat(value)));
    };

    return (
        <div>
            <h3>Energy Converter</h3>
            <input 
                type="number" 
                value={joules} 
                onChange={handleJoulesChange} 
                placeholder="Joules" 
            />
            <div>
                <p>Calories: {energy.calories}</p>
                <p>Kilowatt-hours: {energy.kilowattHours}</p>
            </div>
        </div>
    );
};

export default EnergyComponent;
