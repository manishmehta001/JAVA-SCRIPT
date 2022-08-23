/* problem => write a programe if input will be 1, "y", "yes", then output should be in this condtion is "continued"
and if input will be 0, "n", "no" then output should be come "end....*/
// define the promt
const ps = require("prompt-sync");
const prompt = ps();
var input = prompt(" enter the input ");

if(input === 1 || input === "y" || input === "yes")
{
    console.log("continued..");
}
else if(input === 0 || input === "n" || input === "no")
{
    console.log("end..");
}
else
{
    console.log("wrong input ");
}

