/*Sum of Digits
Problem Statement:
Given a positive number you need to write a program to find the sum of the inner digits of that
number.
Input - 2124
Output - 3*/
// step 1. converting into a string
// step 2. traverse and pick individual digits.





function getSumOfInnerDigits(num)
{
    var numStr = num.toString();// converting number into string.

// check if inner digits are present 
if(numStr.length<3)
{
    console.log(-1);
    return;

}
// run. loop
let sum = 0;
for(let i=1; i<=numStr.length-2; i++)
{ 
    sum = sum +Number(numStr[i]);//Number function can be used to convert valid stirng into a number
}
console.log(sum);

}
getSumOfInnerDigits(123456);//14
getSumOfInnerDigits(12);//-1
getSumOfInnerDigits(9);//-1
getSumOfInnerDigits(7071);//7

