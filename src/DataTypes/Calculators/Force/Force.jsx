class Force {
    constructor(force = null, mass = null, acceleration = null) {
        this.force = force;
        this.mass = mass;
        this.acceleration = acceleration;
        this.update();
    }

    update() {
        if (this.force !== null && this.mass !== null) {
            this.acceleration = this.force / this.mass;
        } else if (this.force !== null && this.acceleration !== null) {
            this.mass = this.force / this.acceleration;
        } else if (this.mass !== null && this.acceleration !== null) {
            this.force = this.mass * this.acceleration;
        }
    }

    setForce(force) {
        this.force = force;
        this.update();
    }

    setMass(mass) {
        this.mass = mass;
        this.update();
    }

    setAcceleration(acceleration) {
        this.acceleration = acceleration;
        this.update();
    }

    getValues() {
        return {
            force: this.force,
            mass: this.mass,
            acceleration: this.acceleration
        };
    }
}
export default Force
// const force = new Force(null, 10, 9.8);
// console.log(force.getValues()); // { force: 98, mass: 10, acceleration: 9.8 }

// force.setForce(196);
// console.log(force.getValues()); // { force: 196, mass: 20, acceleration: 9.8 }
