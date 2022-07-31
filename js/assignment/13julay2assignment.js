/*Assignment 2

Requirements:
Program to check if a number is odd or even*/


// define the prompt
const ps = require("prompt-sync");
const prompt = ps();

// take input from user
var number = prompt("Enter a number: ");

if(number % 2 == 0)  // check if number is even
{
    console.log("The number is even");
}
else                 // if number is odd
{
    console.log("The number is odd");
}
   