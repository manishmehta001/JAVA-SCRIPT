//================ access a data from array =======================//

var array = ["ram", "shyam", "ghanshyam", "murli", "manohar"];
var thirdName = array[2];
console.log(array); //output after accession = [ 'ram', 'shyam', 'ghanshyam', 'murli', 'manohar' ]
console.log(thirdName); //output = ghanshyam

//================= delete a data from array =====================//

array.pop(); //this function is use to delete last data from array
console.log(array); //output after deletion = [ 'ram', 'shyam', 'ghanshyam', 'murli' ]

array.shift(); //Removes the first element from an array and returns it.
// If the array is empty, undefined is returned and the array is not modified.
console.log(array); //output after deletion = [ 'shyam', 'ghanshyam', 'murli' ]

array.splice(1, 1); // this function is use to delete data some where if you want to delete
console.log(array); //output after deletion(1, 1) = [ 'shyam', 'murli' ]....ghanshyam is deleted.

//================== update a data from array ===========================//

array[1] = "manish";
console.log(array); //output after updation = [ 'shyam', 'manish' ]

//================== add a data from array ==================================//

array.push("chandaa"); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(array); //output after the addition =[ 'shyam', 'manish', 'chandaa' ]

array.splice(2, 0, "gudiya"); //splice is also used in addition in between where you want to add.
console.log(array); //[ 'shyam', 'manish', 'gudiya', 'chandaa' ]
