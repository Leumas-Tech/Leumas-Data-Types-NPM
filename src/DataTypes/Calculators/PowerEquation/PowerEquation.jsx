class Power {
    constructor(power = null, voltage = null, current = null) {
        this.power = power;
        this.voltage = voltage;
        this.current = current;
        this.update();
    }

    update() {
        if (this.power !== null && this.voltage !== null) {
            this.current = this.power / this.voltage;
        } else if (this.power !== null && this.current !== null) {
            this.voltage = this.power / this.current;
        } else if (this.voltage !== null && this.current !== null) {
            this.power = this.voltage * this.current;
        }
    }

    setPower(power) {
        this.power = power;
        this.update();
    }

    setVoltage(voltage) {
        this.voltage = voltage;
        this.update();
    }

    setCurrent(current) {
        this.current = current;
        this.update();
    }

    getValues() {
        return {
            power: this.power,
            voltage: this.voltage,
            current: this.current
        };
    }
}
export default Power
// const power = new Power(null, 120, 2);
// console.log(power.getValues()); // { power: 240, voltage: 120, current: 2 }

// power.setPower(480);
// console.log(power.getValues()); // { power: 480, voltage: 240, current: 2 }
