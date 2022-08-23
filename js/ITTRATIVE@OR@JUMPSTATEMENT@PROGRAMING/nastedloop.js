let innterCounter=1;
let innterCounter2=1;
for(let i=1; i<5; i++)
{
    console.log("outer for loop: "+i);
    for(let j=0; j<=1; j++)
    {
        console.log("inner for loop: "+innterCounter++);
        for(let k=0; k<=5; k++)
        {
            console.log("inner2 for loop: "+innterCounter2++);
        }
    }
}

// for(let i = 1; i<=10; i++){
//     console.log(i);                   
//     for(let j = 1; j<=2; j++){        
//         console.log("zakvan");                        
//     }
// }