let type1 = 5 + "2";
console.log("type1 ", type1);                                //52
console.log(typeof type1);                                  //string

let type2 = 5 + null;
console.log("type2 ", type2);                             //5
console.log(typeof type2)                                //number

let type3 = "5" -"yes";
console.log("type3 ", type3);                          //Nan
console.log( typeof type3);                           //number


let type4 = 5 * "2";
console.log("type4 ", type4);                       //10
console.log(typeof type4);                         //number

let type5 = 5 - null;
console.log("type5 ", type5);                    //5
console.log(typeof type5)                       //number

let type6 = "5" + null;
console.log("type6", type6);                 //5null
console.log(typeof type6)                   //string

let type7 = "5" * "null" ;
console.log("type7 ", type7);             //Nan
console.log(typeof type7)                //number
