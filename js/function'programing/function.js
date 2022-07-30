        // how to create a function
/*circularbraket=> are used to take input into function.
and the circular braket intialized to variable is known as "parameter" or "argument".x and y
these are parameter which will hold input and which is  passed the function so this the main purpose of circular braket*/

/*curly brakets => are used to defined the body of function .  
and in body of function to define the actuall task of function to perform*/

function addTwoNumbers(x, y){   //in this circulr breakts it is accept the parametere.
    var result = x + y;
    return result;  // return keyword use to retun output to the caller
}
    // how to call/execute/inoke a function
    var output = addTwoNumbers(10, 20);  //in this circular brakets it is used to paas the parameteres.
    //and the output are which is stored the data which is returning by addTwoNumbers.
    console.log(output); 
     output = addTwoNumbers(-10, 40);
    console.log("result is", output);
