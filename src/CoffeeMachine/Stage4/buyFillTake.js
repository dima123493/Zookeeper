let water = 400;
let milk = 540;
let coffeeBeans = 120;
let cups = 9;
let money = 550;

function CoffeeMachine() {
    console.log("The coffee machine has:");
    console.log(water + " ml of water");
    console.log(milk + " ml of milk");
    console.log(coffeeBeans + " g of coffee beans");
    console.log(cups + " disposable cups");
    console.log("$" + money + " of money");
}

CoffeeMachine();

console.log();

function Choose() {
    const input = require('prompt-sync')();
    let choice = input("Write action (buy, fill, take): ");

    if (choice === "buy") {
        buy();
    }
    if (choice === "fill") {
        fill();
    }
    if (choice === "take") {
        take();
    }
}

Choose();

function buy() {
    const input = require('prompt-sync')();
    let choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ");

    if (parseInt(choice) === 1) {

        if (water >= 250 && coffeeBeans >= 16 && cups >= 1) {
            water -= 250;
            coffeeBeans -= 16;
            money += 4;
            cups--;
        }

        CoffeeMachine()
    } else if (parseInt(choice) === 2) {

        if (water >= 350 && milk >= 75 && coffeeBeans >= 20 && cups >= 1) {
            water -= 350;
            milk -= 75;
            coffeeBeans -= 20;
            money += 7;
            cups--;
        }

        CoffeeMachine()
    } else if (parseInt(choice) === 3) {

        if (water >= 200 && milk >= 100 && coffeeBeans >= 12 && cups >= 1) {
            water -= 200;
            milk -= 100;
            coffeeBeans -= 12;
            money += 6;
            cups--;
        }

        CoffeeMachine();
    } else {
        console.log("Invalid input");
    }
}

function fill() {
    const input = require('prompt-sync')();
    let choice1 = input("Write how many ml of water you want to add: ");
    parseInt(choice1);
    let choice2 = input("Write how many ml of milk you want to add: ");
    parseInt(choice2);
    let choice3 = input("Write how many grams of coffee beans you want to add: ");
    parseInt(choice3);
    let choice4 = input("Write how many disposable coffee cups you want to add: ");
    parseInt(choice4);
    water = water + parseInt(choice1);
    milk = milk + parseInt(choice2);
    coffeeBeans = coffeeBeans + parseInt(choice3);
    cups = cups + parseInt(choice4);

    CoffeeMachine();
}

function take() {
    console.log("I gave you $" + money);
    money = 0;

    CoffeeMachine();
}
