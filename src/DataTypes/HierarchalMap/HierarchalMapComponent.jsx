import React, { useState } from 'react';
import HierarchicalMap from './HierarchicalMap'; // Assuming HierarchicalMap is in the same directory

const HierarchicalMapComponent = () => {
    const [hmap] = useState(new HierarchicalMap());
    const [path, setPath] = useState('');
    const [value, setValue] = useState('');
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    const handleSet = () => {
        hmap.set(path, value);
        setPath('');
        setValue('');
    };

    const handleGet = () => {
        setResult(hmap.get(query));
        setQuery('');
    };

    return (
        <div>
            <h3>HierarchicalMap</h3>
            <input 
                type="text" 
                placeholder="Path (e.g., config.database.host)" 
                value={path} 
                onChange={(e) => setPath(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Value" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <button onClick={handleSet}>Set</button>
            <br/>
            <input 
                type="text" 
                placeholder="Query (e.g., config.database.host)" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <button onClick={handleGet}>Get</button>
            <div>Result: {result}</div>
        </div>
    );
};

export default HierarchicalMapComponent;
