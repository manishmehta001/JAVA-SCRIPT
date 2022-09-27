/*Using var in a loop:=> */

var i = 5;
for(var i=0; i<=10; i++){
}
console.log(i);

/*using let in loop:=>  */
let i = 5;
for(let i=0; i<=10; i++){
}
console.log(i);
/*In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.
In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.
When let is used to declare the i variable in a loop, the i variable will only be visible within the loop. */