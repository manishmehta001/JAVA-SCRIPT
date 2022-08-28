function reverseString(str)
{
    var output ="";    
    for(let i=str.length-1; i>=0; i--)
    {
        output = output + str[i];
    }
    console.log(output);

}
reverseString("mumbai");
reverseString("manish");
reverseString("vivek");