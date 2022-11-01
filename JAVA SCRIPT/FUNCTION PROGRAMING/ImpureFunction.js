/*==========================Impure function============================================/
    1. It depend on any external data.
    2. It does not depends on arguments passed.
    3. It have side effects.
    4. It behavior might be changed  */

const NumC = 35;
function ImpureAddFunction(a, b) {
    return a + b + NumC;
}
console.log(ImpureAddFunction(10, 20));