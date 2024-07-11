class CurrencyAmount {
    constructor(amount, currency = 'USD') {
        this.amount = amount;
        this.currency = currency;
        this.rates = { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110 };
    }

    convertTo(currency) {
        if (this.rates[currency]) {
            const convertedAmount = (this.amount / this.rates[this.currency]) * this.rates[currency];
            return new CurrencyAmount(convertedAmount, currency);
        }
        throw new Error('Unsupported currency');
    }
}
export default CurrencyAmount
// Usage
// const money = new CurrencyAmount(100, 'USD');
// const euros = money.convertTo('EUR');
// console.log(euros.amount); // 85
// console.log(euros.currency); // EUR
