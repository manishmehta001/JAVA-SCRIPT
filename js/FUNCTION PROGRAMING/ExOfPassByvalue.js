function ChekForObject(obj){
    obj.age=25;
}
const obj = {name:"x", age:20};
// ChekForObject(obj);
// console.log(obj);
const obj2 =obj;
obj2.age =25;
console.log(obj);
