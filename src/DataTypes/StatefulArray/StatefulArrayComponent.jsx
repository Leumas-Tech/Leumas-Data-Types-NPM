import React, { useState } from 'react';
import StatefulArray from './StatefulArray'; // Assuming StatefulArray is in the same directory

const StatefulArrayComponent = () => {
    const [array] = useState(new StatefulArray());
    const [version, setVersion] = useState(0);

    const handlePush = () => {
        array.push(Math.floor(Math.random() * 100));
        setVersion(array.currentVersion);
    };

    const handlePop = () => {
        array.pop();
        setVersion(array.currentVersion);
    };

    const handleUndo = () => {
        array.undo();
        setVersion(array.currentVersion);
    };

    const handleRedo = () => {
        array.redo();
        setVersion(array.currentVersion);
    };

    const handleQuery = () => {
        alert(JSON.stringify(array.queryVersion(version), null, 2));
    };

    const handleExport = () => {
        alert(array.exportState());
    };

    const handleImport = (state) => {
        array.importState(state);
        setVersion(array.currentVersion);
    };

    return (
        <div>
            <button onClick={handlePush}>Push</button>
            <button onClick={handlePop}>Pop</button>
            <button onClick={handleUndo}>Undo</button>
            <button onClick={handleRedo}>Redo</button>
            <button onClick={handleQuery}>Query</button>
            <button onClick={handleExport}>Export</button>
            <input type="file" onChange={(e) => {
                const reader = new FileReader();
                reader.onload = (event) => handleImport(event.target.result);
                reader.readAsText(e.target.files[0]);
            }} />
            <div>Current State: {JSON.stringify(array.currentState)}</div>
        </div>
    );
};

export default StatefulArrayComponent;
