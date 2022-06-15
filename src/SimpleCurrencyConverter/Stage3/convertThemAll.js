const strings = {
    welcome: "Welcome to Currency Converter!",
    dollar: "1 USD equals  "
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

console.log("What do you want to convert?");
const promptSync = require('prompt-sync')();
let input = promptSync("From: ").toUpperCase();
checkNames(input);
let input1 = promptSync("To: ").toUpperCase();
checkNames(input1);
const input2 = promptSync("Amount: ");
let amount = parseInt(input2);
checkAmount(amount);

function checkAmount(amount) {
    if (amount < 1) {
        console.log("The amount can not be less than 1");
    }
    if (typeof (amount) !== 'number') {
        console.log("The amount has to be a number");
    }
}


function checkNames(name) {
    if (!currencyRate.hasOwnProperty(name)) {
        console.log('Unknown currency');
        process.exit();
    }
}

if (input in currencyRate && input1 in currencyRate && amount > 0) {
    let result = amount / currencyRate[input] * currencyRate[input1];
    console.log("Result: " + amount + " " + input.toUpperCase() + " equals " + result.toFixed(4) + " " + input1.toUpperCase());
}