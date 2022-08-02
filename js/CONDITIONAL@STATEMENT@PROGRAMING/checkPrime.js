// check number is prime or not


function primeNo(num)
{
    var num;
    if(num==1 || num==0)
    {
        console.log(num + " is not a prime no");
    }
    for(let i=2; i<num; i++)
    { 
    if(num%i===0)
    {
        console.log(num + " is not a prime no");
        return false;
    }else
    {
        console.log(num + " is a prime no");
        return true;
    }
}
}

primeNo(1);