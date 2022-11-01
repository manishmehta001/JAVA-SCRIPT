/*Problem 10 –
Create a pattern using ‘*’ as shown below using loops
            *
           ***
          ***** 
         *******
        *********         */


function starsPiramid(num)
{
    for(let i=1; i<=num; i++)
    {
        let stars ="";
        for(j=1; j<=num-i; j++)
        {
            stars = stars + " ";
        }
        for(k=0; k<2*i-1; k++)
        {
            stars = stars + "*";
        }
        console.log(stars);
    }

}
starsPiramid(5);