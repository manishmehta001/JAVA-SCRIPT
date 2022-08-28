//====================== reduce() function ==========================//

/*A function that accepts up to four arguments.
 The reduce method calls the callbackfn function one time for each element in the array.
Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.*/

/* santax of reduce() function =>
(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[])
 => number): number (+2 overloads)*/

const num = [2, 4, 7, 9];

// find the total sum of num array
console.log(num.reduce((preNum, currNum)=>preNum + currNum));//output = 22

//find the avreage of sum num array
console.log(num.reduce((preNum, currNum)=>preNum + currNum)/num.length);// output = 5.5