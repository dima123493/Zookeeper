# Coffee Machine

What can be better than a cup of coffee during a break? Two cups. Press a couple of buttons on the machine, and, voilà, a burst of raw energy is in your hands. But first, we should teach the machine how to do it. In this project, I have worked on a coffee machine simulator. This machine uses regular ingredients — coffee, milk, and plastic cups. Should it run out of something, it will show you a notification. This device will serve espresso, cappuccino, and latte. And since nothing is for free, it will also charge coffee lovers for a cup.

## Work on project. Stage 1/6: Making coffee

###### Description
Let's start with a program that makes you a coffee – a virtual coffee, of course. In this project, you will implement functionality that imitates a real coffee machine. It can run out of ingredients, such as milk or coffee beans. It can offer you various types of coffee, and, finally, it requires money to serve you a drink.

###### Objective
The first version of the program makes coffee, nothing more. It should print what it is doing to the standard output. Take a look at the example below and output all the following lines.

###### Example
Example 1: output of program

Starting to make a coffee  
Grinding coffee beans  
Boiling water  
Mixing boiled water with crushed coffee beans  
Pouring coffee into the cup  
Pouring some milk into the cup  
Coffee is ready!  

## Work on project. Stage 2/6: Ingredient calculator

###### Description
Now, let's consider a case when you need a lot of coffee. You're hosting a party with a lot of guests! In these circumstances, it's better to make preparations in advance.

We will ask users to enter the desired amount of coffee in cups. After this, the program should calculate how much water, coffee, and milk are necessary to make the specified amount of coffee.

Of course, this much coffee is not required right now, so at this stage, the coffee machine doesn't actually make coffee.

###### Objectives
Let's break the task into several steps:

* Read how much coffee the machine needs to make (in cups);
* Figure out how much of each ingredient is required. Note that one cup of coffee contains 200 ml of water, 50 ml of milk, and 15 g of coffee beans;
* Output the required ingredients.

Examples
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

###### Example 1: an example of the program

Write how many cups of coffee you will need:  
-> 25  
For 25 cups of coffee you will need:  
5000 ml of water  
1250 ml of milk  
375 g of coffee beans  

###### Example 2: an example of the program

Write how many cups of coffee you will need:  
-> 125  
For 125 cups of coffee you will need:  
25000 ml of water  
6250 ml of milk  
1875 g of coffee beans  

## Work on project. Stage 3/6: Coffee for all

###### Description
A real coffee machine doesn't have an infinite supply of water, milk, or coffee beans. And if you need a lot of coffee, it's almost certain that you will have to replenish the supplies sooner or later.

In this stage, you need to improve the program from the previous stage. Now, you will check how much water, milk, and coffee beans are available for your coffee machine at the moment.

###### Objectives
Write a program that does the following:

It requests the amounts of water, milk, and coffee beans available at the moment and then asks for the number of required coffee cups;
If the coffee machine has the supplies to make enough coffee, the program should print the following: Yes, I can make that amount of coffee.
If the coffee machine can make more than that, the program should output Yes, I can make that amount of coffee (and even N more than that), where N is the number of extra cups.
If you're running short, the program should output No, I can make only N cups of coffee.
Like in the previous stage, the coffee machine needs 200 ml of water, 50 ml of milk, and 15 g of coffee beans for one cup.

###### Examples
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

Example 1: the right amount  

Write how many ml of water the coffee machine has:  
-> 300  
Write how many ml of milk the coffee machine has:  
-> 65  
Write how many grams of coffee beans the coffee machine has:  
-> 100  
Write how many cups of coffee you will need:  
-> 1  
Yes, I can make that amount of coffee  

Example 2: not enough supplies  

Write how many ml of water the coffee machine has:  
-> 500  
Write how many ml of milk the coffee machine has:  
-> 250  
Write how many grams of coffee beans the coffee machine has:  
-> 200  
Write how many cups of coffee you will need:  
-> 10  
No, I can make only 2 cups of coffee  

Example 3: extra cups  

Write how many ml of water the coffee machine has:  
-> 1550  
Write how many ml of milk the coffee machine has:  
-> 299  
Write how many grams of coffee beans the coffee machine has:  
-> 300  
Write how many cups of coffee you will need:  
-> 3  
Yes, I can make that amount of coffee (and even 2 more than that)  

Example 4: an empty stock  

Write how many ml of water the coffee machine has:  
-> 0  
Write how many ml of milk the coffee machine has:  
-> 0  
Write how many grams of coffee beans the coffee machine has:  
-> 0  
Write how many cups of coffee you will need:  
-> 1  
No, I can make only 0 cups of coffee  

Example 5: a zero case  

Write how many ml of water the coffee machine has:  
-> 0
Write how many ml of milk the coffee machine has:  
-> 0
Write how many grams of coffee beans the coffee machine has:  
-> 0  
Write how many cups of coffee you will need:  
-> 0  
Yes, I can make that amount of coffee  

Example 6: extra cups  

Write how many ml of water the coffee machine has:  
-> 200  
Write how many ml of milk the coffee machine has:  
-> 50  
Write how many grams of coffee beans the coffee machine has:  
-> 15  
Write how many cups of coffee you will need:  
-> 0  
Yes, I can make that amount of coffee (and even 1 more than that)  

## Work on project. Stage 4/6: Buy, fill, take!

###### Description
Let's take a step forward! Our coffee machine will have a limited supply of water, milk, coffee beans, and disposable cups. Also, it will charge for making coffee.

There are several features that we want you to implement. The machine should sell coffee. It should make different types of coffee — espresso, latte, and cappuccino. Of course, each variation requires a different amount of supplies. In any case, you need only one disposable cup for every drink. Furthermore, the coffee machine must be replenished by a special person. And lastly, another special person should be able to take out the money from the coffee machine.

###### Objectives
Write a program that offers to buy one cup of coffee, to fill the supplies, or to take the money from the machine. Note that the program is supposed to do only one of the mentioned actions at a time. It should also calculate the amounts of the remaining ingredients and how much money is in store. Display the number of supplies before and after a purchase.

Your program reads one option from the standard input that is either buy, fill, or take. If users want to buy a cup of coffee, the correct command is buy. If a special person thinks that it is time to top up the supplies, the command is fill. If another special worker decides that it is time to take the money from the coffee machine, input take.
If users choose buy, they need to pick one of the three coffee types: an espresso, a latte, or a cappuccino. Enumerate the options as follows: 1 - espresso, 2 - latte, 3 - cappuccino. In addition to that, take into account the amounts of supplies for each variation:
One espresso requires 250 ml of water and 16 g of coffee beans. It costs $4;
One latte requires 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7;
One cappuccino requires 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
If users write fill, the program should ask them how much water, milk, coffee, and how many disposable cups they want to add to the coffee machine.
If users write take, the program should give all the money that it has earned.
Name the actions as buy, fill, and take.

For a start, the coffee machine has $550, 400 ml of water, 540 ml of milk, 120 g of coffee beans, and 9 disposable cups.

To sum up, your program should print the state of the coffee machine, process one query from the user, and print the coffee machine state afterward. Try to employ functions for implementing various features.

###### Examples
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

Example 1: buying things  

The coffee machine has:  
400 ml of water  
540 ml of milk  
120 g of coffee beans  
9 disposable cups  
$550 of money  

Write action (buy, fill, take):  
-> buy  
What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:  
-> 3  

The coffee machine has:  
200 ml of water  
440 ml of milk  
108 g of coffee beans  
8 disposable cups  
$556 of money  

Example 2: topping up  

The coffee machine has:  
400 ml of water  
540 ml of milk  
120 g of coffee beans  
9 disposable cups  
$550 of money  

Write action (buy, fill, take):  
-> fill  
Write how many ml of water you want to add:  
-> 2000  
Write how many ml of milk you want to add:  
-> 500  
Write how many grams of coffee beans you want to add:  
-> 100  
Write how many disposable coffee cups you want to add:  
-> 10  

The coffee machine has:  
2400 ml of water  
1040 ml of milk  
220 g of coffee beans  
19 disposable cups  
$550 of money  

Example 3: taking money from the bank  

The coffee machine has:  
400 ml of water  
540 ml of milk  
120 g of coffee beans  
9 disposable cups  
$550 of money  
  
Write action (buy, fill, take):  
-> take  
I gave you $550  
  
The coffee machine has:  
400 ml of water  
540 ml of milk  
120 g of coffee beans  
9 disposable cups  
$0 of money  

## Work on project. Stage 5/6: Keeping track of the supplies

###### Description
We can carry on and make things more interesting, can't we? Let's improve the program so it can do multiple actions, one after another. It must repeatedly ask users what they want to do. Users can input either buy, fill, or take, and then the program does the same thing it did in the previous step. However, if users want to turn off the coffee machine, they should type in exit. The program terminates after this command. Also, when users type in remaining, the program should output all coffee machine resources. This means that you shouldn't show the remaining stock levels at the beginning/end of the program.

###### Objectives
Write a program that continuously makes coffee for everyone until the shutdown command is provided. Introduce two new options: remaining and exit.

Do not forget that you can overstretch your supplies while making coffee. If the coffee machine doesn't have enough resources to make coffee, the program should output a message saying that it can't make it anymore and state what is missing.

And the last improvement to the program at this step — if users enter buy to buy a cup of coffee but change their mind afterward, allow them to input back to return to the main menu.

Set the following initial supplies: 400 ml of water, 540 ml of milk, 120 g of coffee beans, 9 disposable cups, $550.  

###### Example
The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

Example 1: the program operations  

Write action (buy, fill, take, remaining, exit):  
-> remaining  

The coffee machine has:  
400 ml of water  
540 ml of milk  
120 g of coffee beans  
9 disposable cups  
$550 of money  

Write action (buy, fill, take, remaining, exit):  
-> buy  

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:  
-> 2  
I have enough resources, making you a coffee!  

Write action (buy, fill, take, remaining, exit):  
-> remaining  

The coffee machine has:  
50 ml of water  
465 ml of milk  
100 g of coffee beans  
8 disposable cups  
$557 of money  

Write action (buy, fill, take, remaining, exit):  
-> buy  

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:  
-> 2  
Sorry, not enough water!  

Write action (buy, fill, take, remaining, exit):  
-> fill  

Write how many ml of water do you want to add:  
-> 1000  
Write how many ml of milk do you want to add:  
-> 0  
Write how many grams of coffee beans do you want to add:  
-> 0  
Write how many disposable cups of coffee do you want to add:  
-> 0  

Write action (buy, fill, take, remaining, exit):
-> remaining  

The coffee machine has:  
1050 ml of water  
465 ml of milk  
100 g of coffee beans  
8 disposable cups  
$557 of money  

Write action (buy, fill, take, remaining, exit):
-> buy  

What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:
-> 2  
I have enough resources, making you a coffee!  

Write action (buy, fill, take, remaining, exit):
-> remaining  

The coffee machine has:
700 ml of water  
390 ml of milk  
80 g of coffee beans  
7  disposable cups  
$564 of money  

Write action (buy, fill, take, remaining, exit):
-> take  

I gave you $564  

Write action (buy, fill, take, remaining, exit):
-> remaining  

The coffee machine has:  
700 ml of water  
390 ml of milk  
80 g of coffee beans  
7 disposable cups  
$0 of money

Write action (buy, fill, take, remaining, exit):  
-> exit

## Work on project. Stage 6/6: The sandbox

###### Description
The time goes on, and the competitors are developing their own coffee machines to attract coffee lovers with special types of coffee or interesting features. It's time to enhance your coffee machine to compete with them!

In this stage, you are free to add anything you want to your coffee machine!

###### Objective
Try to be creative and add something new to your coffee machine. It can be a new type of coffee, different milk flavors, or different volumes of disposable cups.

###### Implemented
Sometimes we all face a problem where we receive information that there are no ingredients in the coffee machine, and sometimes we waste a lot of time to understand which ingredients are needed.
On this stage, I have added a display view of which ingredients and in what amount should be added to the coffee machine in order to make 1 cup of chosen drink.

More features yet to come!
