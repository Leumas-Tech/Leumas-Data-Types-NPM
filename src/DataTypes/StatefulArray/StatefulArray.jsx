class StatefulArray {
    constructor() {
        this.history = [[]];
        this.currentVersion = 0;
    }

    get currentState() {
        return this.history[this.currentVersion];
    }

    push(element) {
        this._addVersion([...this.currentState, element]);
    }

    pop() {
        if (this.currentState.length > 0) {
            this._addVersion(this.currentState.slice(0, -1));
        }
    }

    _addVersion(newState) {
        this.history = this.history.slice(0, this.currentVersion + 1);
        this.history.push(newState);
        this.currentVersion++;
    }

    undo() {
        if (this.currentVersion > 0) {
            this.currentVersion--;
        }
    }

    redo() {
        if (this.currentVersion < this.history.length - 1) {
            this.currentVersion++;
        }
    }

    queryVersion(version) {
        if (version >= 0 && version < this.history.length) {
            return this.history[version];
        }
        return null;
    }

    exportState() {
        return JSON.stringify(this.history);
    }

    importState(state) {
        this.history = JSON.parse(state);
        this.currentVersion = this.history.length - 1;
    }
}
export default StatefulArray