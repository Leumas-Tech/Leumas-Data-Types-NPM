class Time {
    constructor(milliseconds) {
        this.milliseconds = milliseconds;
        this.seconds = milliseconds / 1000;
        this.minutes = milliseconds / 60000;
        this.hours = milliseconds / 3600000;
        this.days = milliseconds / 86400000;
    }
}
export default Time
// const time = new Time(86400000);
// console.log(`Milliseconds: ${time.milliseconds}, Seconds: ${time.seconds}, Minutes: ${time.minutes}, Hours: ${time.hours}, Days: ${time.days}`);
