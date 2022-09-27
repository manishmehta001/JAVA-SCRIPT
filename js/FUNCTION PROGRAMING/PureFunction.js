/*==========================Pure function============================================/
    1. It doesn't depend on any external data.
    2. It only depends on arguments passed.
    3. It doesnt have any side effects.  */

    function pureAddFunction(a, b){
        return a+b;
    }
    console.log(pureAddFunction(10, 20));  // 30