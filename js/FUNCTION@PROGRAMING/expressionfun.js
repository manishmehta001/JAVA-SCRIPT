// create a function=> Function expression 

const add = function(a, b)
{
    console.log(a + b);
}
console.log(typeof add); // check which type of variable

// calling a function
function addAndprintMessage(FunAdd, message)
{
    FunAdd(10, 20);
    console.log(message);
}
addAndprintMessage(add, "hello there"); 