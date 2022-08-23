/* Loops with Break and Continue Statement
Problem – Write a program demonstrating break and continue functionality
Steps -
1) For loop to iterate through 0 to 9
2) Break statement when i = 5;
3) Step2 will terminate the loop when i = 5
4) For loop to iterate through 0 to 9
5) Continue statement when i = 5;
6) Step4 will skip printing 5 */
function demoBreakAndContinue(){ 
    let n =9;
for(let i=0; i<=n; i++){
    if(i==5){
        break;
    }
    console.log(i);
}
for(let i=0; i<=n; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
}
demoBreakAndContinue();