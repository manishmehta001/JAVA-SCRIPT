//====================== arrow function ==============================//

// if we have only one santax for declreation the function then we use like this

const addFunc = (a, b)=>a+b;// here function creation and declreation
console.log(addFunc(10, 20));// here calling function

// if we have multiple santax for declreation the function then we use  like this

const addTwoValue = (a,b)=>{
    const result = a + b;
    console.log(result);
    return result;

}
addTwoValue(5,7);