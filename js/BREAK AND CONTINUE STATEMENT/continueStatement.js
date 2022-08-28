//====================== continue statement ====================================//
/*The Continue Statement =>
                            The continue statement breaks one iteration (in the loop), if a specified condition occurs,
                            and continues with the next iteration in the loop. */

for(let counter = 1; counter <= 10; counter++){
    if(counter == 5){
        continue;
    }
    console.log(counter);// output = 1,2,3,4,6,7,8,9,10 means that when the condition will be true then continue
    // statement will be excute and then it jump out reverse in loop not in block of code.s
}

