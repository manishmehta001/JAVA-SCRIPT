/*Conditional Statements
Problem 1 –
Create a program which gives output for children to go out in park if the temperature is between 20
degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
should not step out of the home.*/

function canGoPark(temp, IsRaining)
{
    if (temp>=20 && temp<=25 && ! IsRaining)
    {
        console.log("can go to park");
    }
    else if(temp>=18 && temp<=20 && IsRaining)
    {
        console.log("can not go to park");
    }
    else
    {
        console.log("stay from home");
    }
}
canGoPark(22, false);
canGoPark(18, true);
canGoPark(40, true);