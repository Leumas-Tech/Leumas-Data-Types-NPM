class Energy {
    constructor(joules) {
        this.joules = joules;
        this.calories = joules / 4.184;
        this.kilowattHours = joules / 3.6e6;
    }
}

export default Energy