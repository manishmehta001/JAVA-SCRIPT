/*FREQUENCY COUNTERS
• This pattern uses objects or sets to collect values/frequencies of values
• This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
EXAMPLE
Write a function called same, which accepts two arrays. The function should return true if every value in the array
 has it's corresponding value squared in the second array. The frequency of values must be the same.
-same ([1,2,3], [4,1,9]) // true
-same ([1,2,3], [1,9]) // false
-same ([1,2,1], [4,4,1]) // false (must be same frequency)  
=================================================================================================================
sudo code==>
1.take tow input as a parametr of two array
2.campare length of both array and che these length are not eual, then returns fals.
3.itrete for both array elements and cheq squre of fist array element are eual to be in 3nd array.
4.if this true then return true otherwise false.
*/
//------------------------------------------------------------------------------------------------------------//
function CheqSquareOfArray(array1, array2){
    if(array1.length!==array2.length){
        return false;
    }
    var count =0;
    for(let i=0; i<array1.length; i++){
        let element = array1[i] **2;
        for(let j=0; j<array2.length; j++){
            if(element==array2[j]){
                count++;
                break;
            }
        }
    }
    if(count==array1.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(CheqSquareOfArray([1,2,3,4],[1,4,9,16]));
console.log(CheqSquareOfArray([1,2,3,4],[1,1,6,8]));
console.log(CheqSquareOfArray([1,2,3,4],[1,16,9,4]));
