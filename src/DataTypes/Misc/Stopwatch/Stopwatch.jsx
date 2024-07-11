class Stopwatch {
    constructor() {
        this.startTime = null;
        this.elapsedTime = 0;
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.startTime = Date.now() - this.elapsedTime;
        }
    }

    stop() {
        if (this.running) {
            this.running = false;
            this.elapsedTime = Date.now() - this.startTime;
        }
    }

    reset() {
        this.running = false;
        this.startTime = null;
        this.elapsedTime = 0;
    }

    getTime() {
        if (this.running) {
            return Date.now() - this.startTime;
        }
        return this.elapsedTime;
    }
}
export default Stopwatch
// Usage
// const stopwatch = new Stopwatch();
// stopwatch.start();
// setTimeout(() => {
//     stopwatch.stop();
//     console.log(stopwatch.getTime()); // Time elapsed in milliseconds
// }, 2000);
