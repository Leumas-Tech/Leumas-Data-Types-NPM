class Volume {
    constructor(liters) {
        this.liters = liters;
        this.milliliters = liters * 1000;
        this.gallons = liters / 3.78541;
    }
}
export default Volume
// const volume = new Volume(1);
// console.log(`Liters: ${volume.liters}, Milliliters: ${volume.milliliters}, Gallons: ${volume.gallons}`);
