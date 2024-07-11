class Speed {
    constructor(mps) {
        this.mps = mps;
        this.kph = mps * 3.6;
        this.mph = mps * 2.23694;
        this.knots = mps * 1.94384;
    }
}
export default Speed
// const speed = new Speed(10);
// console.log(`Meters per second: ${speed.mps}, Kilometers per hour: ${speed.kph}, Miles per hour: ${speed.mph}, Knots: ${speed.knots}`);
