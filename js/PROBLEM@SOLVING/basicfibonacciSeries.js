/*Nth Fibonacci 
Problem Statement:
Given the value of n, find out the nth term of the fibonacci series.
Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two
elements and the first two elements are 0 and 1.
Example-1:
Input 5
Output 3
Example-2:
Input 24
Output 28657*/


var a = 0;
var b = 1;
console.log(a);
console.log(b);
var c;
for(let i=2;i<=10;i++){
  c= a+b;
  console.log(c);
  a=b;   
  b=c;
 
}