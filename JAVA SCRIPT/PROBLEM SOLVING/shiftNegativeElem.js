/*Shift Negative elements to the end of an array
Problem – Given an array. You need to shift negative elements to the end of an array. For example –
Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }
Approach 1(With extra space) – We can use a temp array to store the values. First store all positive numbers in
the temp array and then negative numbers. Then copy temp array to original array
Intuition - Our main task is to rearrange the numbers in the given array. We can use conditions on elements to
check if they are positive or negative and then apply operations.
Time Complexity –
If there are N numbers in the given array arr, then complexity will be O(N) */

function shiftNegativeElement(array) {
    let temp = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            temp[j] = array[i];
            j++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            temp[j] = array[i];
            j++;
        }
    }
    array = temp;
    return array;

}
const array = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
console.log(shiftNegativeElement(array));