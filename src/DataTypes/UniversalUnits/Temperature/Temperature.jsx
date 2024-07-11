class Temperature {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
        this.celsius = (fahrenheit - 32) * 5/9;
        this.kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    }
}
export default Temperature
// const temp = new Temperature(98.6);
// console.log(`Fahrenheit: ${temp.fahrenheit}, Celsius: ${temp.celsius}, Kelvin: ${temp.kelvin}`);
