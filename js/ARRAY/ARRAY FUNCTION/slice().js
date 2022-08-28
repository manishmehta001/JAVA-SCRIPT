//========================== slice() methods ===============================//
//slice()==>
/*The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array. */

 const array = [1, 2, 3, 4, 5, 6, 7];

 console.log(array.slice(1,6));// output = [ 2, 3, 4, 5, 6 ]