// async function test() {
//     console.log("2:message")
//     console.log("3:message")
//     console.log("4:message")
// }
// console.log("1:message");
// test();
// console.log("5:message");

// 2nd part==========================================

async function test() {
    console.log("2:message");
    const response = await fetch("./studentData.json");
    console.log("4:message");
}
console.log("1:message");
test();
console.log("5:message");