function printTable(n)
{
    for(let i=1; i<=n; i++) 
    {
        let table ="";
        for(let j=i;j<=i*10; j=j+i){
            table += j + " ";
        }
        console.log(table);
    }
    
}
printTable(5);
