/*Single Digit Sum
Problem – Given a number N. You need to find the sum of digits of N until we get a single digit sum. For example –
Input – 12345
Output – 15 (1+2+3+4+5)
Approach – We can traverse through the sum until the sum value is less than or equal to 9. We can use Loops to
iterate through the sum. Here we will use while loop for iteration
Steps -
1) Initialize sum = 0;
2) Verify if sum is less than 9 or n > 0 in loop condition
3) Fetch last digit of n and add to the sum
4) Remove last digit of n
5) Repeat step 2 till condition is satisfied
6) Return final value of sum   */


function findSingleDigitSum(num){ // 10
    // 1. Convert number to string.
    // => Because you can't find length/travers a number
    const numStr = num.toString();
    if(numStr.length==1){
        return numStr;
    }
    let sum=0;
    // 2. Sum all digits of the number.
    for(let i=0; i<numStr.length; i++){
        sum+=Number(numStr[i]);
    }
    if(sum>9){ // 10
        findSingleDigitSum(sum); // 10
    }else{
        console.log(sum);
    }
}

findSingleDigitSum(12345);