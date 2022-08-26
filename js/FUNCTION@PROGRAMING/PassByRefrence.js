/*Pass by Reference in JavaScript===>

Unlike pass by value in JavaScript, pass by reference in JavaScript does not create a new space in the memory, instead, 
we pass the reference/address of the actual parameter which means, the function can access the original value of the 
variable. Thus, if we change the value of the variable inside the function then the original value also gets changed.

It does not create a copy, instead, it works on the original variable so all the changes made inside the function affect 
the original variable as well.    */
// example 1st==>
let obj1 = {website: "Relevel Academy"}
let obj2 = obj1;

console.log(obj1)     // {website: "Relevel Academy"}
console.log(obj2)     // {website: "Relevel Academy"}

obj1.website = "Relevel Topics"

console.log(obj1)     // {website: "Relevel Topics"}
console.log(obj2)     // {website: "Relevel Topics"}
/*explanation==>
In the above example, we have made a variable obj1 and set it equal to an object, then we have set the value of another 
variable obj2 equals to obj1. As the equal operator identifies that we are dealing with non-primitive data types, so 
instead of creating a new memory space, it points obj2 to the same memory space that obj1 is pointed to. Thus when we 
change (mutate) the value of obj1, then the value of obj2 also gets changed since obj2 is also pointing to the same memory
space as obj1 does. */

/*<===============Pass by Reference in Object (with Function)================>*/
let originalObj = {
    name: "Relevel Academy",
    rating: 4.5,
    topic: "JavaScript"
    };
    
    function Duplicate(tempObj) { 
      tempObj.rating = 5; 
      console.log("tempObj", tempObj.rating); 
    } 
    //before paased by refrence 
    console.log("originalObj.rating", originalObj.rating);     // 4.5
    Duplicate(originalObj);
    // after pass by refrence                                // 5
    console.log("originalObj.rating", originalObj.rating);  // 5

 /*explanation==>
 From the above example, we can see that on changing the value tempObj the value of originalObj also gets changed. 
The reason for this is that when we call Duplicate and pass the object then, originalObj is passed by its reference so the 
local parameter tempObj will point to the same object which we defined i.e. the originalObj.
So, in this case, we are not dealing with two independent copies instead, we have variables that are pointing to the same 
object so, any changes made to this object will be visible to the other variable. */

/*<==========================Pass by Reference in an Array (with Function)================================>*/
let originalArr = ["Relevel", "Academy","is", "the"];

function pushArray(tempArray) { 
  tempArray.push('best')
  console.log(tempArray); 
} 

console.log(originalArr);    // ["Relevel", "Academy", "is", "the"]
pushArray(originalArr);      // ["Relevel", "Academy", "is", "the", "best"]
console.log(originalArr);    // ["Relevel", "Academy", "is", "the", "best"]
/*explanation==>
Here, when we are trying to add a new item to the array stored in tempArr, it also affects the originalArr array. This 
happens because there are no two separate copies of an array, we are dealing only with one array. The variable tempArr 
references the same array that was initialized in the variable originalArr.
This example states that like objects, in arrays also on changing the value of tempArr the value of originalArr changes 
automatically.
Thus we can conclude by saying all the non-primitive data types interact by the reference so when we set their values 
equal to each other or pass them to a function, then they all point to the same memory space (address) so whenever we 
change one of the value, then all of the values get changes. */

/*=========================================When to Use Pass by Reference?===========================================>
When we are passing arguments of large size it is better to use pass by reference in JavaScript as no separate copy is 
made in the called function so memory is not wasted, and hence the program is more efficient. */

    