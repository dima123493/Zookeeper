# **Zookeeper**

## **Stage 1/4: Rush into print**

##### **Description**

There are many animals in the zoo, and all of them need care. The animals must be fed, cleaned, surrounded by their kin, and kept happy. That is a difficult task for our large zoo, so one of your employers has suggested a more convenient way to keep track of everything. She wants to be able to pull up a video feed of any animal in the zoo with the help of a program. Being able to check on each habitat would help the zookeepers take care of our furry friends more efficiently!

In this project, you will create a program that helps the zookeepers check on the animals and make sure that they're doing well. Your product will be able to process commands from the zookeepers and display the animals on a monitor.

##### **Objectives**

To begin with, you will develop a simple printer. Your program should display the text from the output example.

##### **Example**

The output:  
I love animals!  
Let's check on the animals...  
The deer looks fine.  
The bat looks happy.  
The lion looks healthy.

## **Stage 2/4: Show me an animal!**

##### **Description**

One of the most important parts of working with animals is keeping an eye on them. We need to see the animals on the screen to know how they are doing, right? Now we are ready to print something awesome: an image of an animal!

##### **Objectives**

For the second stage, you will need to develop an animal printer. Your program should display the animal identified in the code field.

##### **Example**

Your output should contain the following ASCII [image](https://github.com/dima123493/Zookeeper/blob/ffc24ad7a64ad4e9016b44be4744dbcf22b35748/src/Zookeeper/examples/camel.png)

## **Stage 3/4: What's inside?**

##### **Description**

The third stage requires you to increase the capabilities of your software. Now it should be able to recognize the number of a specific habitat from the input and show the animals living there.

Add all of the variables from the template to a single variable with the list type. The order of variables matters: they must appear on the list in the order in which they're defined in the code. The list must contain all of the variables with no duplicates.

##### **Objectives**

In this stage your program should:

Ask for the number of the desired habitat using the following phrase: `Which habitat # do you need?`

Use the input number as an index of your habitats to print its content.

End with the following phrase:

`---
You've reached the end of the program. To check another habitat, please restart the watcher.`

##### **Examples**
The greater-than symbol followed by a space (> ) represents the user input. Notice that it's not part of the input.

[Example 1](https://github.com/dima123493/Zookeeper/blob/533deb49adad167b574ae1d965f74064c3bae3cc/src/Zookeeper/examples/rabit.png)  
[Example 2](https://github.com/dima123493/Zookeeper/blob/533deb49adad167b574ae1d965f74064c3bae3cc/src/Zookeeper/examples/bat.png)  

## **Stage 4/4: Sustainable care <3**

##### **Description**

Now it's time to make our project user-friendly. In this final stage, you'll make your software ready for the zoo staff to use. Your program should understand the habitat numbers, show the animals, and be able to work continuously without having to be restarted.

##### **Objectives**

Your tasks at this point:  

Your program should repeat the behavior from the previous stage, but now in a loop.  

Do not forget to include an exit opportunity: inputting `exit` should end the program.  

When the program is done running, it should print: `See you later!`  

##### **Examples**

[Example 1](https://github.com/dima123493/Zookeeper/blob/533deb49adad167b574ae1d965f74064c3bae3cc/src/Zookeeper/examples/everything.png)
