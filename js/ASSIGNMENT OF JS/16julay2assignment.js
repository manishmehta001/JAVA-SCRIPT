/*Assignment 2

Requirements:
"2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal"*/

// define the promt
const ps = require("prompt-sync");
const prompt = ps();
var x = prompt('enter first number ');
var y = prompt('enter second number ');
function findLarge(x,y)
{
    if(x>y)
    {
        return x;
    }
    else
    {
        return y;
    }
   
}
console.log("largest no", findLarge(x,y));
