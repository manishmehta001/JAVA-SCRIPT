/* Power of a Number
Problem Statement:
Given two numbers A and B, You are supposed to find A to power B without using any built -in
function.
Input - num=10, power=2
Output - 100
  */


function aToThePowerB(num,power)
{
    result = 1;
    
    for(let i=1; i<=power; i++)
    { 
    result= result*num;
    }

console.log(result);
}
aToThePowerB(10,2);
aToThePowerB(10,3);
aToThePowerB(2,5);
aToThePowerB(4,3);