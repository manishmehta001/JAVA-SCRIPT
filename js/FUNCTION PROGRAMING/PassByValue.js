/*Pass by Value in JavaScript==>
Pass by value in JavaScript means that a copy of the actual parameter’s value is made in memory.
i.e. a new memory allocation is done, and all the changes are made in that new value (i.e., copied value).
The original value and the copied value are independent of each other as they both have a different space 
in memory i.e. on changing the value inside the function, the variable outside the function is not affected.

In simple language, we can understand it as, in a pass by value, the function receives a copy of the variable, 
which is independent of the originally passed variable.
Pass by value in JavaScript requires more space as the functions get a copy of the actual content therefore a new 
variable is created in the memory.

In this concept, equals operator plays a big role. When we create a variable, equals operator notices whether you are 
assigning that variable a primitive or non-primitive value and then works accordingly.

Note: When we use = operator, there is a function call (behind the scenes) where pass by value (or reference) in 
JavaScript is done. */
//Example =>
let num1 = 70
let num2 = num1

console.log(num1) // 70
console.log(num2) // 70

num1 = 40

console.log(num1) // 40
console.log(num2) // 70
/*explanation=>
 Here, we have assigned num1 a value of 70. This creates a space in memory by the name num1 and addresses 2001 (assumption) 
 When we create a variable num2 and assign it the value of num1, then equals operator notices that we’re dealing with a 
 primitive values thus it creates a NEW SPACE in memory with address 2002 and assigns it a copy of num1's value, i.e. 70. 
 Now we can see that both the variables have different spaces in the memory, and both have a value of 70.
Now, if we change the value of num1, then num2 will have no effect as it has its own separate space in memory and now it 
has nothing to do with the value of num2 as they both have different spaces (address) in memory.*/

//example2 =>
function passByValue(value) {
    //it will create new address and value there
    //becuse it get value n paramete, not address
    value = value + 10;
    return (value);
}
//creat a value and store in memory with its address
const num = 99;
console.log("num before passing to function ", num);
//return the value of num after adding the value in result with diffrent address
const result = passByValue(num);
//print the value of result 109 which return by passByValue function
console.log("result ", result);
//the value of num be not updated after passing by function because address was not passed
console.log("num after passing to function ", num);