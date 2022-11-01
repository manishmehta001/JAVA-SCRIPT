/* Boolean()==> use this function we can convert any datatype into boolean type */

let type = 0;
console.log(typeof type);      //number
//convertin into boolean
let NewType = Boolean(type);   
console.log(NewType);          //false
console.log(typeof NewType);   //boolean

let numType = 32;
console.log(typeof numType);      //number
//convertin into boolean
let NewBoolType = Boolean(numType);   
console.log(NewBoolType);          //true
console.log(typeof NewBoolType);   //boolean

let StrType = "";
console.log(typeof StrType);      //string
//convertin into boolean
let NewStrType = Boolean(StrType);   
console.log(NewStrType);          //false
console.log(typeof NewStrType);   //boolean

let StrType1 = "hello";
console.log(typeof StrType1);      //string
//convertin into boolean
let NewStrType1 = Boolean(StrType1);   
console.log(NewStrType1);          //true
console.log(typeof NewStrType1);   //boolean