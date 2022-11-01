/*Reverse Array=>
Problem – Given an array of numbers. You need to reverse the array. For example –
Input – [1,2,3,4,5]
Output – [5,4,3,2,1]
Approach 1 – We can use swapping operation to get the desired output. Let’s see each step –
1) Initilaize two pointers - start=0, end = n-1 where n = number of elements in array
2) Swap elements present at start and end
3) Start = start+1, end = end -1
4) Repeat step1 till start <= end   */

function printReverseArray(array){
     // please create an empty array so that I can copy elements into it.
    const result = [];
    // create a pointer for empty array so that I can increament it to next positions
    let j = 0;
    // run a loop from last position in array to the beginning of array.
        for(let i=array.length-1; i>=0; i--){
            // copying from original array into result array.
            result[j] = array[i];
            // increament position of j so that we don't overrwrote the elements into same positions
            j++;
        }
    // print result array
    console.log(result);
}
printReverseArray([1, 2, 3, 4, 5, 6]);