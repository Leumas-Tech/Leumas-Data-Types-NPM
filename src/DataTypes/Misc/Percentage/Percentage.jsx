class Percentage {
    constructor(value) {
        this.value = value;
    }

    increment(amount) {
        this.value = Math.min(this.value + amount, 100);
    }

    decrement(amount) {
        this.value = Math.max(this.value - amount, 0);
    }

    normalize() {
        this.value = Math.max(Math.min(this.value, 100), 0);
    }
}
export default Percentage
// Usage
// const percentage = new Percentage(50);
// percentage.increment(30);
// console.log(percentage.value); // 80
// percentage.decrement(100);
// console.log(percentage.value); // 0
