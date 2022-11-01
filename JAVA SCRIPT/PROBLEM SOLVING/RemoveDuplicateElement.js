/*Remove the duplicate element in the array
Input: const arr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
Output: [ 'a', 'b', 'c', 'd' ]
Steps:
1) Create a object to store the array values and their occurrence counts
2) Iterate through array and create array values as object key and there occurrence as object value
3) Use the Object.keys() function to get the keys as an array */

function removeDuplicateElement(arr) {
    let objKey = {};
    for (let i = 0; i < arr.length; i++) {
        objKey[arr[i]] = (objKey[arr[i]] || 0) + 1;
    }
    return Object.keys(objKey);
}
const arr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
console.log(removeDuplicateElement(arr));
// console.log(objKey);


