class KineticEnergy {
    constructor(kineticEnergy = null, mass = null, velocity = null) {
        this.kineticEnergy = kineticEnergy;
        this.mass = mass;
        this.velocity = velocity;
        this.update();
    }

    update() {
        if (this.kineticEnergy !== null && this.mass !== null) {
            this.velocity = Math.sqrt((2 * this.kineticEnergy) / this.mass);
        } else if (this.kineticEnergy !== null && this.velocity !== null) {
            this.mass = (2 * this.kineticEnergy) / (this.velocity ** 2);
        } else if (this.mass !== null && this.velocity !== null) {
            this.kineticEnergy = 0.5 * this.mass * (this.velocity ** 2);
        }
    }

    setKineticEnergy(kineticEnergy) {
        this.kineticEnergy = kineticEnergy;
        this.update();
    }

    setMass(mass) {
        this.mass = mass;
        this.update();
    }

    setVelocity(velocity) {
        this.velocity = velocity;
        this.update();
    }

    getValues() {
        return {
            kineticEnergy: this.kineticEnergy,
            mass: this.mass,
            velocity: this.velocity
        };
    }
}
export default KineticEnergy
// const ke = new KineticEnergy(null, 50, 10);
// console.log(ke.getValues()); // { kineticEnergy: 2500, mass: 50, velocity: 10 }

// ke.setKineticEnergy(5000);
// console.log(ke.getValues()); // { kineticEnergy: 5000, mass: 50, velocity: 14.1421 }
