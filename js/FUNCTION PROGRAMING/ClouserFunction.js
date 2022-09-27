//==============================Clouser Function=============================================//
/* Understanding Closure.
1. Learning about Scope.
1.1 When x will start occupuong memory ?
As soon as add funciton invokes.
1.2 How long x will remain in memory ?
Untill function completes its execution.
 
2. Using Inner functions.     
2.1 There is a difference in creating and invoking a function.   */


// function x() {
//     console.log("10");
//     // return 35;
// }
// const result = x();
// console.log(result);// output will be 10, undefined without any returning. 
//                    //and when it returning 35 then output will be the 10, 35

const add = function(){
    var x = 10; /// when add is called.
    console.log(x);
    return function add2(){
        // copies x variable into its own scope.
        var y = 20;
        console.log(x+y); //[// how x is accessible ??]
    }
}
const res = add();// output 10......[x is destroyed.]
res(); // output 30
console.log(res);//[Function: add2]......[// when we call add 2 here, how x is accessible ]
console.log(res());//undefined