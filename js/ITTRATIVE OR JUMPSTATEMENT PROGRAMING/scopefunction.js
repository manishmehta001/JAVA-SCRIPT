//scope of variable
function printMessage(){

    var x = "hello"; // scope of this variable is inside the function and outside of function known as gloabal scope variable
    console.log(x);
}
//console.log(x); it can not print this message beacuse it is not declare inside of function.
// it only print those value of variable which is declared by caller inside the function.
printMessage();
console.log("test"); // it will print test because it is global scope variable

//console.log(x); // it will not print the value of x because when it printed the printMessage(); which was defined inside
 //the function and after then it comes to print the console.log(x); by then memory of x had been destroed. and that is why
//we can not the acces the variable of x.