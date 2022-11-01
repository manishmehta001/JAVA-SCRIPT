/*Minimum and Maximum Element
Problem – Given an array of numbers. Your task is to find the minimum and maximum
element. For example –
Input – [2,3,15,6]
Output –
Minimum element - 2
Maximum element - 15
Approach – We can use linear search technique in this.
Steps -
1) Initialize min and max to minimum and maximum of first 2 elements
2) Iterate through array from index 3rd and update min and max respectively after
comparison
3) We are using separate Pair class in this which will have 2 attributes to store minimum
and maximum value
4) Return the output */

function findMinMax(arr){
    let min = arr[0];
    let max= arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
       if(arr[i]>max){
            max = arr[i];
        }
    }
    return min + "-" +max;
    
}
console.log(findMinMax([3,2,15,6]));

//==================================================================================================================
/*Prime Numbers
Problem – Given a number N. You need to find all prime numbers less than or equal to N. For
example –
Input – 7
Output – 2,3,5,7
Approach – We can traverse through the numbers starting from 2 to N and check if the
number is prime number. We can use Loops to iterate through the numbers.
Steps -
1) Iterate through 1 to N
2) Check if number is prime number
3) If yes, print prime number */
function findPrimtNumbers(n){

    for(let i=1; i<=n; i++){ 
        for(let j=1; j<=i; j++){ 
            if(j==i){
                console.log(i);
            }
            if(i%j==0 && j!=0){
                break;
            }
            
        }
    }
}
console.log(findPrimtNumbers(7));
console.log(findPrimtNumbers(25));

