// program for a simple calculator

// define the promt
const ps = require("prompt-sync");
const prompt = ps();
// take the operand input
var num1 = prompt('enter first number ');
var num2 = prompt('enter second number ');

//take opreator input
var op =prompt("enter opreator from (+ - * /) ");

//using function
function add(a, b)
{
    var result = parseInt(a) +parseInt(b);
console.log("addition result is", +result);
}
function subtract(a, b)
{
    var result = a - b;
    console.log("subtraction result is", +result);
}
function multiply(a, b)
{
    var result = a * b;
    console.log("multiplication result is", +result);
}
function division(a, b)
{
    var result = a / b;
    console.log("division result is", +result);
}
// using if..else if statement
if(op=="+")
{
    add(num1,num2);
}
else if(op=="-")
{
    subtract(num1,num2);
}
else if (op=="*")
{
    multiply(num1, num2);
}
else if (op=="/")
{
    division(num1,num2);
}
else
{
    console.log("invalid opreator")
}