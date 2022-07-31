function printResult(grade)
{
    switch(grade)
    {
        case "A+":
        { 
        console.log("dictention");
        break;
         }
         case "A":
         {
        console.log("first class");
        break;
         }
        case "B":
        {
        console.log("pass");
        break;
         }
        case "C":
         {
        console.log("fail");
        break;
         }
         default :
         {
        console.log("Invalid");
         }
    }
    
}
printResult("A+");
 printResult("A");
 printResult("B");
 printResult("C");
printResult("D");