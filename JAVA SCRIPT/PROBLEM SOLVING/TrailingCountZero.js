/*Given an integer n, write a function that returns the count of trailing zeroes in n!.
Example-1
Input: 5
Output: 1                */

function TrailingCountZero(n){
    let fact = 1;
    for(let i=n; i>=1; i--){
        fact *= i;
    }
    console.log(fact);
    let count=0;
    let str = "" + fact;
    for(let i= str.length-1; i>=0; i--){
        if(Number(str[i])==0){
             count++;
        }
        else if(Number(str[i] !=0)){
            return count;
        }
    }
}
console.log(TrailingCountZero(5));