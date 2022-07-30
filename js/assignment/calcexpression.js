//create a function => function exprassion

const add = function(a, b)
{
    console.log(a+b);
}
const sub = function(a, b)
{
    console.log(a-b);
}
// call a function

function calc(func)
{
    func(10,20);
}
calc(add);
calc(sub);