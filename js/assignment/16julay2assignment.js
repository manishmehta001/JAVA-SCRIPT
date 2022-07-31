/*Assignment 2

Requirements:
"2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal"*/

function findLarge(x,y)
{
    if(x>y)
    {
        return x;
    }
    else
    {
        return y;
    }
   
}
console.log("largest no", findLarge(12,5));
console.log("largest no", findLarge(3,87));