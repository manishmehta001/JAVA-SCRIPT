/*Assignment 1

Requirements:
"Practise Problem 1 :
Create a program wherein you will be given a list of name of the people along with their designation, based on the name you type in from the input field of the given html file the relevant designation of the person will be displayed.
Following are the Designation of the people
-Alex is a Developer
-John is an Artist
-Strek is a Singer
-Smith is an Actor*/

//define a promt
const ps = require("prompt-sync");
const prompt = ps();
var name = prompt("enter the name ");

function Artist(name)
{
    if(name=="alex")
    {
        console.log("alex is devloper");
    }
    else if(name=="jhon")
    {
        console.log("jhon is an artist");
    }
    else if (name=="strek")
    {
        console.log("strek is singer")
    }
    else if(name=="smith")
    {
        console.log("smith is an actor")
    }
    else
    {
        console.log("Not found")
    }
}
Artist(name);