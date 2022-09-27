/*4. LCM of number (15 min) :
BED-Class #180DaysofPurpose
Problem Statement:
Given two numbers, find the least possible positive integer that is divided by them.
Example-1:
Input 10,5
Output 10
Example-2:
Input 12,16
Output 80       */

function lcmOfNumber(x,y){
    let i,lcm;
    if(x>y){
        i = x;
    }
    else{
        i = y;
    }
    while(true){
        if(i%x==0 && i%y==0){
             lcm = i;
            break;
        }
        i++;
    }
    return lcm;
}
// console.log(lcmOfNumber(10,5));
// console.log(lcmOfNumber(11,5));
console.log(lcmOfNumber(2,5));