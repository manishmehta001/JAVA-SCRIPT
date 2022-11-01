let array = ['manish', 27, "lucknow", ['male', 3400]];
let [fname, age = 20, city, [gender, salery]] = array;
console.log(fname);
console.log(age);
console.log(city);
console.log(gender);
console.log(salery);