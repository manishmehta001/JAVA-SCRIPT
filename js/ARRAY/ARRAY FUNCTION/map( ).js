//======================= map function ============================//

const students = ["zakvan", "anashvar", "rahul", "asif", "jagruthi"];
//expected output = [6, 8, 5, 4, 8]
console.log(students.map((name)=>name.length));//output = [ 6, 8, 5, 4, 8 ] 

//firstly name parameter goes to every element of students array through the map function.
//and takes every element as a name and find the its length using =>name.lenght 
// and then it put the lenth of every element of array in a new array as a result.