class HierarchicalMap {
    constructor() {
        this.map = {};
    }

    set(path, value) {
        const keys = path.split('.');
        let current = this.map;
        while (keys.length > 1) {
            const key = keys.shift();
            if (!current[key]) {
                current[key] = {};
            }
            current = current[key];
        }
        current[keys[0]] = value;
    }

    get(path) {
        const keys = path.split('.');
        let current = this.map;
        for (const key of keys) {
            if (!current[key]) {
                return undefined;
            }
            current = current[key];
        }
        return current;
    }

    merge(otherMap) {
        const mergeRecursively = (obj1, obj2) => {
            for (const key in obj2) {
                if (obj2[key] instanceof Object && key in obj1) {
                    mergeRecursively(obj1[key], obj2[key]);
                } else {
                    obj1[key] = obj2[key];
                }
            }
        };
        mergeRecursively(this.map, otherMap.map);
    }

    toJSON() {
        return JSON.stringify(this.map, null, 2);
    }

    static fromJSON(jsonString) {
        const map = new HierarchicalMap();
        map.map = JSON.parse(jsonString);
        return map;
    }
}
export default HierarchicalMap