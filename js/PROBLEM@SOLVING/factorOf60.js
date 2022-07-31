/*Power of a Number
Problem Statement:
Given two numbers A and B, You are supposed to find A to power B without using any built -in
function.
Input - num=10, power=2
Output - 100 */

function divisibleBy60(num)
{
    var found = true;
    var numStr = num.toString();
    for(let i=1020; i<=9999; i=i+60)
    {
        found = true;
        for(let j=0; j<4; j++)
        {
            if(!numStr.includes(i.toString()[j]))
            {
                found = false;
                break;
            }
        }
        if(found)
        { 
        console.log(i);
        }
    
    }
    
}
divisibleBy60(2340);
