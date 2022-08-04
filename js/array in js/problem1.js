/*Minimum and Maximum Element
Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
Input – [2,3,15,6]
Output –
Minimum element - 1
Maximum element - 15
Approach – We can use linear search technique in this.
Steps -
1) Initialize min and max to minimum and maximum of first 2 elements
2) Iterate through array from index 3rd and update min and max respectively after comparison
3) Return the output  */

const input = [2,3,15,6]

console.log(input.filter((minNum)=>minNum<input.length));
console.log(input.filter((maxNum)=>maxNum>input.length));
