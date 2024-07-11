class Weight {
    constructor(grams) {
        this.grams = grams;
        this.milligrams = grams * 1000;
        this.kilograms = grams / 1000;
        this.pounds = grams / 453.592;
    }
}
export default Weight
// const weight = new Weight(1000);
// console.log(`Grams: ${weight.grams}, Milligrams: ${weight.milligrams}, Kilograms: ${weight.kilograms}, Pounds: ${weight.pounds}`);
