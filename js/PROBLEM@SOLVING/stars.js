/*Problem 9 –
Create a pattern using ‘*’ as shown below using loops.
*
**
***
****
*****              */


function printStars(num)
{
    for(let i=1; i<=num; i++)
    {
        let stars ="";
        for(let j=1; j<=i; j++)
        {
            stars +="*";
        }
        console.log(stars);
    }

}
printStars(5);