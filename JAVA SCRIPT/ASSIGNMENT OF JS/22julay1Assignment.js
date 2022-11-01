/*Problem Statement-1: 

Given a positive integer A, 
find a pair of integer a, b 
such that
a and b are positive
a <= b
a^2 + b^2 = A
0<=A<=100000    */

function findMaxNum(num) {

    for (let a = 0; a <= num; a++) {

        for (let b = 0; b <= num; b++) {
            if (a * a + (b * b) == num) {
                if (a >= b) {
                    console.log("number pair is " + (a) + " and " + (b));
                }
            }
        }
    }
}
findMaxNum(50);