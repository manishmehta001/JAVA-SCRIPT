//Problem – Given a number age. You need to find if that age is coming under voting age. Age
//can be considered as the voting age if it is greater than 18

function VotingAge(age)
{
    if (age>=18)
    {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
VotingAge(34);
VotingAge(17);
