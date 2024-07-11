class Area {
    constructor(squareMeters) {
        this.squareMeters = squareMeters;
        this.squareKilometers = squareMeters / 1e6;
        this.acres = squareMeters / 4046.86;
        this.squareFeet = squareMeters * 10.7639;
    }
}

export default Area