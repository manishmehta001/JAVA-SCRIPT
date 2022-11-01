// let complete = true;
// let prom = new Promise(function (resolve, reject) {
//     if (complete) {
//         resolve("I am successful");
//     } else {
//         reject("i am failure");
//     }
// });
// console.log(prom);
//2nd===========================================================
function prom(a, b) {
    return new Promise(function (resolve, reject) {
        console.log("fetching data! plesase wait");
        var c = a / b;
        setTimeout(() => {
            if (c) {
                resolve(`your answer ${c}`);
            } else {
                reject("failed to calculate");
            }
        }, 3000)
    });
}
let onfullfilment = (result) => {
    console.log(result);
}
let onrejection = (result) => {
    console.log(result);
}
prom(0, 2).then(onfullfilment).catch(onrejection);
// console.log(prom(true));