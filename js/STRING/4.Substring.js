/*A substring is a part or a portion of a string. For example, "rain" is a substring of the string "brain" because you 
can get "rain" by taking the last 4 characters.
When working with strings, you often need to get a few characters of a string rather than all of it. Thus we use the 

substring method.==> someString.substring(indexStart, indexEnd) 

This means that when you call substring, you can give it 2 parameters, the first one for the indexStart and the second one
for indexEnd.
=>indexStart: the position of the first character you'd like to include
=>indexEnd: the position of the first character you'd like to ignore   */

const language = "JavaScript";

console.log(language.substring(1, 4)); //"ava"

/*Recap
-> A substring is a part or a portion of a string.
-> string.substring(indexStart, indexEnd) is used to return a portion of the string.
-> indexStart: the position of the first character you'd like to include.
-> indexEnd: the position of the first character you'd like to ignore.
-> the indexEnd argument is optional which means you can leave it out. */

function skipFirstCharacter(text) {
    return text.substring(1, 5);
    }
    
    // Sample usage - do not modify
    console.log(skipFirstCharacter("Xcode")); // "code"
    console.log(skipFirstCharacter("Hello")); // "ello"
    