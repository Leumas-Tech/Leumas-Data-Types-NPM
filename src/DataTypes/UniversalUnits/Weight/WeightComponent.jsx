import React, { useState } from 'react';
import Weight from './Weight'; // Assuming Weight class is in the same directory

const WeightComponent = () => {
    const [grams, setGrams] = useState(1000);
    const [weight, setWeight] = useState(new Weight(grams));

    const handleGramsChange = (e) => {
        const value = e.target.value;
        setGrams(value);
        setWeight(new Weight(parseFloat(value)));
    };

    return (
        <div>
            <h3>Weight Converter</h3>
            <input 
                type="number" 
                value={grams} 
                onChange={handleGramsChange} 
                placeholder="Grams" 
            />
            <div>
                <p>Milligrams: {weight.milligrams}</p>
                <p>Kilograms: {weight.kilograms}</p>
                <p>Pounds: {weight.pounds}</p>
            </div>
        </div>
    );
};

export default WeightComponent;
