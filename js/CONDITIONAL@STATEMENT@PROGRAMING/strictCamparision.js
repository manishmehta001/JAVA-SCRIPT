/* problem => write a programe if input will be 1, "y", "yes", then output should be in this condtion is continued..
and if input will be 0, "n", "no" then output should be come end....*/

let input;
input = 1;
if(input===1 || input==="y" || input==="yes")
{
    console.log("continued...");
}
else if(input===0 || input==="n" || input==="no")
{
    console.log("end...");
}
else
{
    console.log("wrong input");
}

// ================== using switch case ==========//
// switch(input){
//     case 1 :
//     case "y" :
//     case "yes" :
//         console.log("continued.....");
//         break;
//     case 0 :
//     case "n" :
//     case "no":
//         console.log("end......");
//         break;
//     default :
//         console.log("wrong input");
// }

