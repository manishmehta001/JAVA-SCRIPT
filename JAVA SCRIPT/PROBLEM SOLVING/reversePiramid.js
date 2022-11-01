/*Reverse Pyramid
Problem – Given a number N. You need to print a reverse pyramid having N rows using numbers 1 to N. For
example –
Input – 6
otput-
1 2 3 4 5 6
 2 3 4 5 6
  3 4 5 6
   4 5 6
    5 6
     6
     6
    6 5
   6 5 4
  6 5 4 3
 6 5 4 3 2
6 5 4 3 2 1
Approach –
Intuition - Since, it is printing numbers N times, it's obvious that we need to
use the loop concept here. Now, based on the pattern in the problem, we
need to decide the pattern of calling loops.
Steps -
1) Outer loop - iterate from 1 to N - variable i
2) Inner loop 1 - print space (Iterate from 1 to i) - variable j
3) Inner loop 2 - print number(Iterate from i to N) - variable j
4) Print new line */

function ReversePiramid(num){
    for(let i=1; i<=num; i++){
        let line ="";
        //print initial space
        for(let j=1; j<i; j++){
            line = line + " ";
        }
        //print space and num in between
        for(let k=i; k<=num; k++){
            line = line + k + " ";
        }
        console.log(line);
    }
    for(let i=num; i>=1; i--){
        let line = "";
        for(let j=i; j>1; j--){
            line = line + " ";
        }
        for(let k=num; k>=i; k--){
            line = line + k + " ";
        }
        console.log(line);

    }

}
ReversePiramid(6);