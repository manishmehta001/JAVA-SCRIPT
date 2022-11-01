// class student {
//     constructor() {
//         let name;
//         console.log("hello world");
//     }
//     hello() {
//         console.log("hi guys");
//     }
// }
// let a = new student();
// a.name = "manish";
// console.log(a);
//=======================================================================
class student {
    constructor(name) {
        this.name = name;
        console.log("hello world");
    }
    hello() {
        console.log("hi guys", this.name);
    }
    static staticMehods() {
        console.log("static function");
    }
}
let a = new student("manish");
console.log(a);
a.hello()
student.staticMehods();