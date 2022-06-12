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

function fill() {
    const input = require('prompt-sync')();
    let choice1 = input("Write how many ml of water you want to add: ");
    let choice2 = input("Write how many ml of milk you want to add: ");
    let choice3 = input("Write how many grams of coffee beans you want to add: ");
    let choice4 = input("Write how many disposable coffee cups you want to add: ");

    Math.floor(choice1);
    Math.floor(choice2);
    Math.floor(choice3);

    water = water + parseInt(choice1);
    milk = milk + parseInt(choice2);
    coffeeBeans = coffeeBeans + parseInt(choice3);
    cups = cups + parseInt(choice4);
}

function take() {
    console.log("I gave you $" + money);
    money = 0;
}

function Choose() {
    while (true) {
        const input = require('prompt-sync')();
        let choice = input("Write action (buy, fill, take, remaining, exit): ");
        switch (choice) {
            case "buy":
                buy();
                break;
            case "fill":
                fill();
                break;
            case "take":
                take();
                break;
            case "remaining":
                CoffeeMachine();
                break;
            case "exit":
                return false;
        }
    }
}

Choose();

function buy() {
    const input = require('prompt-sync')();
    let choice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - back: ");

    if (parseInt(choice) === 1) {

        if (water < 250) {
            console.log("Sorry, not enough water!");
            console.log("You need to add " + (250 - water) + " ml!");
        }
        if (coffeeBeans < 16) {
            console.log("Sorry, not enough coffee beans!");
            console.log("You need to add " + (16 - coffeeBeans) + " g!");
        }
        if (cups < 1) {
            console.log("Sorry, not enough cups!");
            console.log("You need to add at least 1 cup!");
        }

        if (water >= 250 && coffeeBeans >= 16 && cups >= 1) {
            water -= 250;
            coffeeBeans -= 16;
            money += 4;
            cups--;
            console.log("I have enough resources, making you an espresso!");
        }
    }

    if (parseInt(choice) === 2) {

        if (water < 350) {
            console.log("Sorry, not enough water!");
            console.log("You need to add " + (350 - water) + " ml!");
        }
        if (milk < 75) {
            console.log("Sorry, not enough milk!");
            console.log("You need to add " + (75 - milk) + " ml!");
        }
        if (coffeeBeans < 20) {
            console.log("Sorry, not enough coffee beans!");
            console.log("You need to add " + (20 - coffeeBeans) + " g!");
        }
        if (cups < 1) {
            console.log("Sorry, not enough cups!");
            console.log("You need to add at least 1 cup!");
        }

        if (water >= 350 && milk >= 75 && coffeeBeans >= 20 && cups >= 1) {
            water -= 350;
            milk -= 75;
            coffeeBeans -= 20;
            money += 7;
            cups--;
            console.log("I have enough resources, making you a latte!");
        }
    }

    if (parseInt(choice) === 3) {

        if (water < 200) {
            console.log("Sorry, not enough water!");
            console.log("You need to add " + (200 - water) + " ml!");
        }
        if (milk < 100) {
            console.log("Sorry, not enough milk!");
            console.log("You need to add " + (100 - milk) + " ml!");
        }
        if (coffeeBeans < 12) {
            console.log("Sorry, not enough coffee beans!");
            console.log("You need to add " + (12 - coffeeBeans) + " g!");
        }
        if (cups < 1) {
            console.log("Sorry, not enough cups!");
            console.log("You need to add at least 1 cup");
        }

        if (water >= 200 && milk >= 100 && coffeeBeans >= 12 && cups >= 1) {
            water -= 200;
            milk -= 100;
            coffeeBeans -= 12;
            money += 6;
            cups--;
            console.log("I have enough resources, making you a cappuccino!");
        }
    }

    if (parseInt(choice) === 4) {

        Choose();
    }
}