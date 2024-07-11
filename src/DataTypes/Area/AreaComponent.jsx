import { useState } from 'react';
import Area from './Area'; // Assuming Area class is in the same directory

const AreaComponent = () => {
    const [squareMeters, setSquareMeters] = useState(1000);
    const [area, setArea] = useState(new Area(squareMeters));

    const handleSquareMetersChange = (e) => {
        const value = e.target.value;
        setSquareMeters(value);
        setArea(new Area(parseFloat(value)));
    };

    return (
        <div>
            <h3>Area Converter</h3>
            <input 
                type="number" 
                value={squareMeters} 
                onChange={handleSquareMetersChange} 
                placeholder="Square Meters" 
            />
            <div>
                <p>Square Kilometers: {area.squareKilometers}</p>
                <p>Acres: {area.acres}</p>
                <p>Square Feet: {area.squareFeet}</p>
            </div>
        </div>
    );
};

export default AreaComponent;
