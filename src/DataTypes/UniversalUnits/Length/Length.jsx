class Length {
    constructor(meters) {
        this.meters = meters;
        this.millimeters = meters * 1000;
        this.centimeters = meters * 100;
        this.kilometers = meters / 1000;
        this.inches = meters * 39.3701;
    }
}
export default Length
// const length = new Length(1);
// console.log(`Meters: ${length.meters}, Millimeters: ${length.millimeters}, Centimeters: ${length.centimeters}, Kilometers: ${length.kilometers}, Inches: ${length.inches}`);
