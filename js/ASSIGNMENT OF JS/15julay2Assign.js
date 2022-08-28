/*Assignment 2..=>
"2. Create a program to print all the palindromes under 50.
Palindrome - A number which read same from backwards as well as forwards
Output - 1,2,3,4,5,6,7,8,9,11,22,33,44"*/

function palindromes(n)
{
    var rev = 0;
    origin = n;
    while(n>0)
    {
        x = n % 10;
        rev = rev * 10 + x;
        n = parseInt(n/10);
    }
    if(origin==rev)
    {
        console.log(rev);
    }
}
for(let i=0; i<=1000; i++)
{
    palindromes(i);
}


  