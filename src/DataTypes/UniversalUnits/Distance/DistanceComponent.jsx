import React, { useState } from 'react';
import Distance from './Distance'; // Assuming Distance class is in the same directory

const DistanceComponent = () => {
    const [meters, setMeters] = useState(1000);
    const [distance, setDistance] = useState(new Distance(meters));

    const handleMetersChange = (e) => {
        const value = e.target.value;
        setMeters(value);
        setDistance(new Distance(parseFloat(value)));
    };

    return (
        <div>
            <h3>Distance Converter</h3>
            <input 
                type="number" 
                value={meters} 
                onChange={handleMetersChange} 
                placeholder="Meters" 
            />
            <div>
                <p>Kilometers: {distance.kilometers}</p>
                <p>Miles: {distance.miles}</p>
                <p>Feet: {distance.feet}</p>
            </div>
        </div>
    );
};

export default DistanceComponent;
