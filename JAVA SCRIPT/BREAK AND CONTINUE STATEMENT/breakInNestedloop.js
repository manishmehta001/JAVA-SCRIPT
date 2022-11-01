/* write a programe using break statement in nasted loop */

outer: for(let i = 1; i <= n; i++){// outer is a known as a lebel .
    console.log(i);
    for(let j = 1; j <=n; j++){
        if(i==3){   
            break outer;
        }
        console.log("manish mehta");
    }

}