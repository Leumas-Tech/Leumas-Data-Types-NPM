import React, { useState } from 'react';
import TemporalGraph from './TemporalGraph'; // Assuming TemporalGraph is in the same directory

const TemporalGraphComponent = () => {
    const [graph] = useState(new TemporalGraph());
    const [timestamp, setTimestamp] = useState('');

    const handleAddNode = () => {
        const nodeId = prompt('Enter node ID:');
        const metadata = prompt('Enter metadata (as JSON):');
        graph.addNode(nodeId, new Date().toISOString(), JSON.parse(metadata));
    };

    const handleAddEdge = () => {
        const source = prompt('Enter source node ID:');
        const target = prompt('Enter target node ID:');
        const metadata = prompt('Enter metadata (as JSON):');
        graph.addEdge(source, target, new Date().toISOString(), JSON.parse(metadata));
    };

    const handleGetNodes = () => {
        const nodes = graph.getNodesAtTime(timestamp);
        alert(JSON.stringify(nodes, null, 2));
    };

    const handleGetEdges = () => {
        const edges = graph.getEdgesAtTime(timestamp);
        alert(JSON.stringify(edges, null, 2));
    };

    const handleExport = () => {
        alert(graph.exportToJSON());
    };

    const handleImport = (state) => {
        graph.importFromJSON(state);
    };

    return (
        <div>
            <button onClick={handleAddNode}>Add Node</button>
            <button onClick={handleAddEdge}>Add Edge</button>
            <input type="text" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder="Timestamp" />
            <button onClick={handleGetNodes}>Get Nodes at Time</button>
            <button onClick={handleGetEdges}>Get Edges at Time</button>
            <button onClick={handleExport}>Export</button>
            <input type="file" onChange={(e) => {
                const reader = new FileReader();
                reader.onload = (event) => handleImport(event.target.result);
                reader.readAsText(e.target.files[0]);
            }} />
            <div>Graph: {JSON.stringify(graph.nodes)}</div>
        </div>
    );
};

export default TemporalGraphComponent;
