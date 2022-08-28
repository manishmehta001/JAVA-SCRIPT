/*Largest among Three numbers
Problem – Given an array of three numbers. You need to find the largest among the three
numbers. For example –
Input – 25, 15, 20
Output – 25*/


function findLargest(a, b, c)
{
    if(a>b && a>c)
    {
        console.log(a+ " is largest");
    }
    else if(b>a && b>c)
    {
        console.log(b+ " is largest");
    }
    else
    {
        console.log(c+ " is largest");
    }
}
findLargest(10, 32, 14);
findLargest(90, 32, 43);
findLargest(9, 2, 4);