class Distance {
    constructor(meters) {
        this.meters = meters;
        this.kilometers = meters / 1000;
        this.miles = meters / 1609.34;
        this.feet = meters * 3.28084;
    }
}

export default Distance