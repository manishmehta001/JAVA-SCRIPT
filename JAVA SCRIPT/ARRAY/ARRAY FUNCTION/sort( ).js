/*Sort( )=====>
Definition and Usage 
•The sort() sorts the elements of an array.
•The sort() overwrites the original array.
•The sort() sorts the elements as strings in alphabetical and ascending order. 

Example==>*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();   
console.log(fruits);//output=[ 'Apple', 'Banana', 'Mango', 'Orange' ]

/*Sort Compare Function==>
Sorting alphabetically works well for strings ("Apple" comes before "Banana").
But, sorting numbers can produce incorrect results.
"25" is bigger than "100", because "2" is bigger than "1".
You can fix this by providing a "compare function" (See examples below).

Syntax==>
array.sort(compareFunction)
Description==>
A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the 
arguments:
function(a, b){return a-b}
When sort() compares two values, it sends the values to the compare function, and sorts the values according to the 
returned (negative, zero, positive) value.

Example:
The sort function will sort 40 as a value lower than 100.
When comparing 40 and 100, sort() calls the function(40,100).
The function calculates 40-100, and returns -60 (a negative value).

Example==>  
•Sort numbers in ascending order:  */
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort((a,b)=>a-b));
/*Expected output=[ 1, 5, 10, 25, 40, 100 ]

•Sort numbers in descending order:    */
const points1 = [40, 100, 1, 5, 25, 10];
console.log(points1.sort((a,b)=>b-a));
/*Expected output=[ 100, 40, 25, 10, 5, 1 ] */
