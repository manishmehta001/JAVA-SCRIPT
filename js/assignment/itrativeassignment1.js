let output =" ";

for(let i=1; i<=100; i++)
{
    if(i % 3 == 0)
    {
        output=output +i + " relevel, "
    }
    else if(i % 5 == 0)
    {
        output = output +i + " buzz, "
    }
    else if(i % 15 == 0)
    {
        output = output +i + " mindbuzz, ";   
    }
    else
    {
        output = output +i + " tSe number, "
    }
}
console.log(output);