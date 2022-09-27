/*10. Sum OF Prime:
Problem Statement:
Given a number A which is an even integer, you need to print two prime numbers whose sum will be equal to A.
Constraint: A>2
Example-1:
Input 4
Output 2,2
Example-2:
Input 15
Output 2,13*/

function isPrime(n){
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// a=4. [i=2], [a-i]=2,

function find2PNums(a){

    for(let i=2; (i<a-2 || a<5); i++){
        if(isPrime(i) && isPrime(a-i)){
            console.log(i, a-i);
            return;
        }
    }
    console.log("No Prime numbers found");
}

find2PNums(10);
find2PNums(15);
find2PNums(4);
find2PNums(200);
find2PNums(11);