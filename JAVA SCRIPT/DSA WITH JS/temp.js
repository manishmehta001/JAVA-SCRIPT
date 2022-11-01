// function same(arrl, arr2) {
//     if (arrl.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arri.length; i++) {
//         let correctIndex = arr2.indexOf(arrl[i] ** 2)
//         if (correctIndex === -1) {
//             return false;
//         } arr2.splice(correctIndex, 1)
//     }
//     return true;
// }

//     // Time Complexity - N ^ 2

// SOLUTION

// function sumzero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }
// // Time Complexity - O(N ^ 2)
// // Space Complexity - O(1)

// function countUniqueValues(arr) {
//     if(arr.length===0){
//         return 0;
//     }
//     var i = 0;
//     for (var j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;

// }
// console.log(countUniqueValues([1,2,2,5,7,7,99]));

// function maxSubarraySum(arr, num) {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) {
//         return null;
//     }
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {
//          tempSum = tempSum - arr[i - num] + arr[i];
//          maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum;
// }
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function search(array, val) {

    let min = 0;
    let max = array.length - 1;
    let currentElement = 0;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
         currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}
console.log(search[2,3,5,7,8,9,6,4,2,1], 4);

//Time Complexity - Log(N) - Binary Search!