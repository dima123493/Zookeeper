# **Simple Currency Converter**

Have you ever wondered how many Japanese yens you can have for 100 USD? This project represents a program that converts a provided currency to another.

## **Stage 1/4: Welcome to Simple Currency Converter**

##### **Description**
To start things off, I added a message printing greetings to users: *"Welcome to Currency Converter!"*

The next thing, is printing the list of currencies that the program can convert. For now, currencies and their equivalents in USD are displayed like this:

| **Currency** | **Rate**  |
|--------------|-----------|
| **USD**      | **1.0**   |
| **JPY**      | **113.5** |
| **EUR**      | **0.89**  |
| **RUB**      | **74.36** |
| **GBP**      | **0.75**  |
#####
##### **Objectives**
In this stage, my program outputs:
- A welcome message;
- A list of currencies and their rates.

##### **Example**
The greater-than symbol followed by a space (> ) represents the user input.

**Example 1:**

Welcome to Currency Converter!  
1 USD equals  1USD  
1 USD equals  113.5 JPY   
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP

## **Stage 2/4: Convert a currency**

##### **Description**
In this stage, I start to convert provided amount of USD to the list of currencies in the first stage.

First, I print a message to let users know what the program can do:

*"I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP"*
*"Type the currency you wish to convert: USD"*

Get input from users. Calculate and output the result that must take 4 decimal places.

When getting the input for the desired currency, the program is able to process lower and uppercase letters. Also, if an unknown input is provided by users, 
program prints the following message and stops: *"Unknown currency"*.

The value for the converted amount should not be less than **1**. If it's less, output *The amount cannot be less than 1.*

##### **Objectives**
In this stage, my program:

- Outputs a new message about what it can do;
- Asks for the currency and amount (see Examples);
- Calculates and output the correct result;
- Handles any uppercased or lowercased inputs;
- Handles unknown currency input;
- Handles an amount that is less than 1;
##### **Examples**
The greater-than symbol followed by a space (> ) represents the user input.

**Example 1:** *converting to JPY*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > JPY  
Amount: > 1  
Result: 1 USD equals 113.5000 JPY

**Example 2:** *converting to EUR*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > EUR  
Amount: > 18  
Result: 18 USD equals 16.0200 EUR

**Example 3:** *unknown currency*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > TL  
Unknown currency

**Example 4:** *wrong amount*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > USD  
Amount: > -1  
The amount cannot be less than 1

**Example 5:** *wrong amount*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > USD
Amount: > a  
The amount has to be a number  

**Example 6:** *lowercase handling*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD  
To: > jpy  
Amount: > 3  
Result: 3 USD equals 340.5000 JPY  

## **Stage 3/4: Convert all currencies**

##### **Description**
In this stage, my program starts converting all currencies between themselves.

First, I remove the previous message:

*I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP  
Type the currency you wish to convert: USD*  

Then, output the following message: ***What do you want to convert?*** 
After this, users provide input that indicates a currency to convert from. 
Also, the program handles all unknown and invalid inputs like in the previous stage.  

##### **Objectives**

In this stage, my program should:

- Ask for the currencies (see Examples);
- Calculate and output the result;
- Handle any unknown and incorrect inputs.
##### **Examples**
The greater-than symbol followed by a space (> ) represents the user input.

**Example 1:** *EUR to GBP*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to convert?  
From: > EUR  
To: > GBP  
Amount: > 115  
Result: 115 EUR equals 96.9101 GBP  

**Example 2:** *wrong input*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to convert?  
From: > USD  
To: > This is a currency, believe me!  
Unknown currency   

**Example 3:** *jpy to jpy*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to convert?  
From: > jpy  
To: > jpy  
Amount: > 3  
Result: 3 JPY equals 3.0000 JPY  

## **Stage 4/4: Loop it!**

##### **Description**
In the final stage, I loop my program to make it run continuously until the exit command is prompted.

First, it asks the user what they want to do: ***What do you want to do?***

Gives two choices to users: one is conversion, the other is the exit. 
Users need to input **1** and **2**, respectively: ***1-Convert currencies 2-Exit program***

In case of any wrong input, program asks again for the input and repeat the process.

Prints the following message when users choose to exit the program: ***Have a nice day!***

Prints the following message when unknown input occurs: ***Unknown input***.

##### **Objectives**

In this stage, my program:

1. Continuously asks for new currency input;
2. Gives two choices to users;
3. Handles unknown inputs.

##### **Examples**

The greater-than symbol followed by a space (-> ) represents the user input. 

**Example 1:** *USD to JPY*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to do?  
1-Convert currencies 2-Exit program  
-> 1  
What do you want to convert?  
From: -> USD  
To: -> JPY  
Amount: -> 115  
Result: 115 USD equals 13052.5000 JPY  
What do you want to do?  
1-Convert currencies 2-Exit program  

**Example 2:** *unknown currency*

Welcome to Currency Converter! 
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to do?  
1-Convert currencies 2-Exit program  
-> 1  
What do you want to convert?  
From: > TL  
Unknown currency  
What do you want to convert?  
From:  ...

**Example 3:** *exiting the program*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to do?  
1-Convert currencies 2-Exit program  
-> 2  
Have a nice day!

**Example 4:** *unknown input*

Welcome to Currency Converter!  
1 USD equals  1 USD  
1 USD equals  113.5 JPY  
1 USD equals  0.89 EUR  
1 USD equals  74.36 RUB  
1 USD equals  0.75 GBP  
What do you want to do?  
1-Convert currencies 2-Exit program  
-> a  
Unknown input  
What do you want to do?  
1-Convert currencies 2-Exit program  