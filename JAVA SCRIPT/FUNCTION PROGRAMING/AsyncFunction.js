//1st part=========================
function test() {
    return "hello"
}
console.log(test());

//2nd part=====================

async function test() {
    return "hello"
}
console.log(test());

//3rd part=====================

async function test() {
    return "hello"
}
test().then((result) => {
    console.log(result);
});