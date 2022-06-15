const strings = {
    welcome: "Welcome to Currency Converter!",
    dollar: "1 USD equals "
}

let currencyRate = {
    usd: 1.0,
    jpy: 113.5,
    eur: 0.89,
    rub: 74.36,
    gbp: 0.75,
}

const currencyName = {
    usd: " USD",
    jpy: " JPY",
    eur: " EUR",
    rub: " RUB",
    gbp: " GBP",
}

console.log(strings.welcome);
for (let value in currencyRate) {
    console.log(strings.dollar + currencyRate[value] + currencyName[value]);
}