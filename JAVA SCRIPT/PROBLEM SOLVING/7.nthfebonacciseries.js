/*Nth Fibonacci 
Problem Statement:
Given the value of n, find out the nth term of the fibonacci series.
Fibonacci series is like 0,1,1,2,3,5,8,13… where the next element is always the sum of the previous two
elements and the first two elements are 0 and 1.
Example-1:
Input 5
Output 3
Example-2:
Input 24
Output 28657*/


function findNthPositioninFibSeries(n){
    if(n<1) return -1;
    if(n==1) return 0;
    if(n==2) return 1;

    let i=2;
    let series=[0,1];
    while(i<=n-1){
        let newNum = series[i-1]+series[i-2];
        series.push(newNum);
        i++;
    }
    console.log(series[n-1]);
}
findNthPositioninFibSeries(8);