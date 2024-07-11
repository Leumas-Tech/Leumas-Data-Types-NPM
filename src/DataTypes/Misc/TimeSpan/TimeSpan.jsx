class TimeSpan {
    constructor(milliseconds) {
        this.milliseconds = milliseconds;
    }

    addSeconds(seconds) {
        this.milliseconds += seconds * 1000;
    }

    addMinutes(minutes) {
        this.milliseconds += minutes * 60000;
    }

    addHours(hours) {
        this.milliseconds += hours * 3600000;
    }

    toSeconds() {
        return this.milliseconds / 1000;
    }

    toMinutes() {
        return this.milliseconds / 60000;
    }

    toHours() {
        return this.milliseconds / 3600000;
    }
}
export default TimeSpan
// Usage
// const timeSpan = new TimeSpan(60000);
// timeSpan.addMinutes(1);
// console.log(timeSpan.toSeconds()); // 120
// console.log(timeSpan.toMinutes()); // 2
// console.log(timeSpan.toHours()); // 0.03333333333333333
