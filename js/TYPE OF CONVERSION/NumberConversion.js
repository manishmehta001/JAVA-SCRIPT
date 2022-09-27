/* Number()==> use this function we can convert any datatype into number type  */

let type = "32";
console.log(typeof type); // string

//converting string into number
let NewType = Number(type);
console.log(typeof NewType);// number

let Strtype = "hello";
console.log(typeof Strtype);// string
//converting string chracter into number
let NewStrType = Number(Strtype); 
console.log(NewStrType);       // Nan
console.log(typeof NewStrType);//number

let boolType = true;
console.log(typeof boolType); //boolean
//converting boolean into number
let newBoolType = Number(boolType);
console.log(newBoolType);      //1
console.log(typeof newBoolType);//number
