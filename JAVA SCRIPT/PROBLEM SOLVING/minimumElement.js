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
3) Return the output */

// var input = [2,3,15,6];
//  console.log(input.reduce((x,y)=>Math.min(x,y)));
//  console.log(input.reduce((x,y)=>Math.max(x,y)));

function findMinMax(array){
    let min=Number.MAX_VALUE;
    let max=Number.MIN_VALUE;
    for(let i=0; i<array.length; i++){
        // for updating min element
        if(array[i]<min){
            min=array[i];
        }
        // for updating max element.
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log("Min: "+min);
    console.log("Max: "+max);
}
findMinMax([3,2,1,8]);
//======================================================================
// let arr = [-1, 2, 3, -4, -5, 69, 8];

function minMax2(arr, i, min, max) {
  // base case
  if (i == arr.length - 1) {
    // console.log(arr, i, min, max);
    return min + " mm " + max;
  }
  if (arr[i] > arr[i + 1]) {
    max = arr[i];
  }

  if (arr[i] < arr[i + 1]) {
    min = arr[i];
  }
  return minMax2(arr, i + 1, min, max);
}
console.log(minMax2([-1, 2, 3, -4, -5, 69, -11], 0, arr[0], arr[0]));
