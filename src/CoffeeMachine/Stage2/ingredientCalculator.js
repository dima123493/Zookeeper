const input = require('prompt-sync')();

let cups = input("Write how many cups of coffee you will need:");

if (isNaN(parseInt(cups))) {
    console.log("The amount has to be a number");
    return false;
}

let water = cups * 200;
let milk = cups * 50;
let coffeeBeans = cups * 15;

console.log("For " + cups + " cups of coffee you will need:");
console.log(water + " ml of water");
console.log(milk + " ml of milk");
console.log(coffeeBeans + " g of coffee beans");