const input1 = require('prompt-sync')();
let water = input1("Write how many ml of water the coffee machine has:");
const input2 = require('prompt-sync')();
let milk = input2("Write how many ml of milk the coffee machine has:");
const input3 = require('prompt-sync')();
let coffeeBeans = input3("Write how many grams of coffee beans the coffee machine has:");
const input4 = require('prompt-sync')();
let cups = input4("Write how many cups of coffee you will need:");

Math.floor(water);
Math.floor(milk);
Math.floor(coffeeBeans);

let coffeeCount = 0;

while (water >= 200 && milk >= 50 && coffeeBeans >= 15) {
    coffeeCount += 1;
    water -= 200;
    milk -= 50;
    coffeeBeans -= 15;
}

if (cups === coffeeCount) {
    console.log("Yes, I can make that amount of coffee");
} else if (coffeeCount > cups) {
    coffeeCount = coffeeCount - cups;
    console.log("Yes, I can make that amount of coffee (and even " + coffeeCount + " more than that");
} else if (cups > coffeeCount) {
    console.log("No, I can make only " + coffeeCount + " cups of coffee");
}