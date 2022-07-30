// finding the max squre value till number
let max=findmax(num);

    for(let a=0; a<=max; a++)
    {
        
        for(let b=0; b<=max; b++)
        {
            if(a*a+(b*b) == num)
            {
                if(a<=b)
                {
                    console.log("number pair is " +(a)+"and"(b));
                }
            }
        }
    }