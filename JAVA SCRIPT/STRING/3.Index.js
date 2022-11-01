/*You can access a specific character in a string by using the square brackets syntax [].
You have to provide the index of the character that you'd like to access, starting from 0. */

const language = "JavaScript";

language[0]; //first character
language[1]; //second character
language[2]; //third character

/*The .at(index) method==>
Since 2022, JavaScript now has a .at() method that reads the character at a certain index, which can also be negative.
Let's take a look at a few examples: */
const language1 = "JavaScript";
language1.at(0); // "J"
language1.at(1); // "a"
language1.at(-1); // "t"
language1.at(-2); // "p"

/*What is the "Sample usage"?
You may have also noticed that every challenge has some sample usage code at the end. For example, for the function 
getCharCount, we had:

Sample usage - Example  */
console.log(getCharCount("Sam")); // 3
console.log(getCharCount("Alex 123")); // 8
console.log(getCharCount("Charley is here")); // 15
/*The goal of the sample usage is to show you the various ways we expect to call the function. Sometimes, we show you the 
expected output next to it in a comment.
Note that in the tests, we end up calling your function with more examples not visible in the sample code. The goal of 
this is to make sure that you've provided a correct answer that works in several scenarios, not just one or two scenarios.*/ */