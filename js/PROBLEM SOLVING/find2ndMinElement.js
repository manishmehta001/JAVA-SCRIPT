/*Write a program to find the second lest number from array using loops concept
Input -> [11,34,54,22,13,78]
Output -> 13  */


function findMinMax(array){
    let min=Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;

    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
        // for updating min element
        if(array[i+1]<secondMin){
            secondMin=array[i+1];
        }
       
    }
    console.log("Min: ",+min);
    console.log("second min: ",+secondMin)
}    
findMinMax([11, 34, 54, 22, 13, 78]);