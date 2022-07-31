/*Requirements:
"Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)Z
R Print Relevel if divisible by 3Z
R Print Buzz if divisible by 5Z
R Print MindBuzz if divisible by 15Z
R Print tSe number if all tSe above condition fails"*/

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