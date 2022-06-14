const input = require('prompt-sync')();
let water = input("Write how many ml of water the coffee machine has:");
let milk = input("Write how many ml of milk the coffee machine has:");
let coffeeBeans = input("Write how many grams of coffee beans the coffee machine has:");
let cups = input("Write how many cups of coffee you will need:");

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
    console.log("No, I can make only " + coffeeCount + " cup(s) of coffee");
}