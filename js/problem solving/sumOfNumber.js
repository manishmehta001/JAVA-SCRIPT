//write a programe to sum of n number from 1 to 'n'.

function sumOfNumber(n)
{
    let sum = 0;
    for(let i=1; i<=n; i++)
    {
        sum=sum + i; //0+1, 1+2, 3+3, 6+4, 10+5
    }
    console.log(sum);
}    
sumOfNumber(5);
sumOfNumber(10);
sumOfNumber(100);