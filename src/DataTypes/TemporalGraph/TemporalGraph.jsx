class TemporalGraph {
    constructor() {
        this.nodes = {};
        this.edges = [];
    }

    addNode(nodeId, timestamp, metadata = {}) {
        if (!this.nodes[nodeId]) {
            this.nodes[nodeId] = [];
        }
        this.nodes[nodeId].push({ timestamp, metadata });
    }

    addEdge(source, target, timestamp, metadata = {}) {
        this.edges.push({ source, target, timestamp, metadata });
    }

    getNodesAtTime(timestamp) {
        const activeNodes = {};
        for (let nodeId in this.nodes) {
            const nodeHistory = this.nodes[nodeId];
            for (let node of nodeHistory) {
                if (node.timestamp <= timestamp) {
                    activeNodes[nodeId] = node;
                }
            }
        }
        return activeNodes;
    }

    getEdgesAtTime(timestamp) {
        return this.edges.filter(edge => edge.timestamp <= timestamp);
    }

    exportToJSON() {
        return JSON.stringify(this.nodes, null, 2);
    }

    static fromJSON(jsonString) {
        const graph = new TemporalGraph();
        graph.nodes = JSON.parse(jsonString);
        return graph;
    }
}
export default TemporalGraph