//============================= break statement =======================================//

/* break; => A 'break' statement can only be used jump out of a loop or switch statement. */

for(let counter = 1; counter <= 10; counter++){
    if(counter == 5){
        break;
    }
    console.log(counter);//output = 1,2,3,4 "it means when if condition will be true then break statement will be excute
    // and then itreation will go out side of the block of code.""
}