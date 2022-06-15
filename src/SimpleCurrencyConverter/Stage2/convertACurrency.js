const strings = {
    welcome: "Welcome to Currency Converter!",
    dollar: "1 USD equals "
}

let currencyRate = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}

console.log(strings.welcome);
for (let curName in currencyRate) {
    console.log(strings.dollar + currencyRate[curName] + " " + curName);
}

console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
const promptSync = require('prompt-sync')();
console.log("Type the currency you wish to convert: USD");
let convertTo = promptSync("To: ").toUpperCase();
if (!currencyRate.hasOwnProperty(convertTo)) {
    console.log("Unknown currency");
    return false;
}
const input2 = promptSync("Amount: ");
let amount = parseInt(input2);

if (amount < 1) {
    console.log("The amount cannot be less than 1");
}

if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return false;
}

if (convertTo in currencyRate && amount > 0) {
    let result = amount / currencyRate["USD"] * currencyRate[convertTo];
    console.log("Result: " + amount + " USD equals " + result.toFixed(4) + " " + convertTo.toUpperCase());
}