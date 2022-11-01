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


function findPrimtNumbers(n) {

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            if (j == i) {
                console.log(i);
            }
            if (i % j == 0) {
                break;
            }




        }
    }
}
findPrimtNumbers(7);
findPrimtNumbers(25);