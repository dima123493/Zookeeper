const promptSync = require('prompt-sync')();

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

while (true) {
    console.log("What do you want to do?");
    let choice = promptSync("1-Convert currencies 2-Exit program");
    switch (parseInt(choice)) {
        case 1:
            convert();
            break;
        case 2:
            console.log("Have a nice day!");
            return false;
        default:
            console.log("Unknown input, try again!");
    }
}

function convert() {
    let convertFrom = readConvertFrom();
    let convertTo = readConvertTo();
    let amount = readAmount();

    return result(convertFrom, convertTo, amount);
}

function readConvertFrom() {
    while (true) {
        console.log("What do you want to convert?");
        let input = promptSync("From: ").toUpperCase();
        if (checkNames(input)) {
            return readConvertFrom();
        }
        return input;
    }
}

function readConvertTo() {
    while (true) {
        let input1 = promptSync("To: ").toUpperCase();
        if (checkNames(input1)) {
            return readConvertTo();
        }
        return input1;
    }
}

function readAmount() {
    while (true) {
        let input2 = Number(promptSync("Amount: "));
        if (checkAmount(input2)) {
            return readAmount();
        }
        return input2;
    }
}

function checkAmount(value) {
    if (value < 1) {
        console.log("The amount can not be less than 1");
        return false;
    }
    if (isNaN(value)) {
        console.log("The amount has to be a number");
        return false;
    }
}

function checkNames(name) {
    if (!currencyRate.hasOwnProperty(name)) {
        console.log('Unknown currency');
        return true;
    }
}

function result(convertFrom, convertTo, amount) {
    if (convertFrom in currencyRate && convertTo in currencyRate && amount > 0) {
        let result = amount / currencyRate[convertFrom] * currencyRate[convertTo];
        console.log("Result: " + amount + " " + convertFrom.toUpperCase() + " equals " + result.toFixed(4) + " " + convertTo.toUpperCase());
    }
}