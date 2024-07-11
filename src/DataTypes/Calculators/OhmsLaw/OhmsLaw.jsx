class OhmsLaw {
    constructor(voltage = null, current = null, resistance = null) {
        this.voltage = voltage;
        this.current = current;
        this.resistance = resistance;
        this.update();
    }

    update() {
        if (this.voltage !== null && this.current !== null) {
            this.resistance = this.voltage / this.current;
        } else if (this.voltage !== null && this.resistance !== null) {
            this.current = this.voltage / this.resistance;
        } else if (this.current !== null && this.resistance !== null) {
            this.voltage = this.current * this.resistance;
        }
    }

    setVoltage(voltage) {
        this.voltage = voltage;
        this.update();
    }

    setCurrent(current) {
        this.current = current;
        this.update();
    }

    setResistance(resistance) {
        this.resistance = resistance;
        this.update();
    }

    getValues() {
        return {
            voltage: this.voltage,
            current: this.current,
            resistance: this.resistance
        };
    }
}
export default OhmsLaw
// const ohm = new OhmsLaw(null, 2, 10);
// console.log(ohm.getValues()); // { voltage: 20, current: 2, resistance: 10 }

// ohm.setVoltage(30);
// console.log(ohm.getValues()); // { voltage: 30, current: 3, resistance: 10 }
