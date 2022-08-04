//================== Filter function =========================//

const students = ["zakvan", "anashvar", "rahul", "asif", "jagruthi"];

console.log(students.map((name)=>name.length<=5));
//output = [ false, false, true, true, false ] using map function in conditional statement
console.log(students.filter((name)=>name.length<=5));
// output = [ 'rahul', 'asif' ] using filter function in codntion statement it find and print the true value

const num = [19, 45, 78, 23, 12, 90, 32, 87, 63];

console.log(num.filter((value)=>value%2==0));
//output = [ 78, 12, 90, 32 ]

/* .filter()==> filter function is used to print conditional statement value.if value is true then
                print its value other wise move forword next element of array.*/

                const student = [
                    {"name":"Shivam", age: 30},
                    {"name":"Saurabh", age: 25},
                    {"name":"Student3", age: 17},
                    {"name":"Student4", age: 22},
                    {"name":"Student5", age: 10},
                    {"name":"Student6", age: 12}
                ]
                // expected output
                //    [ {"name":"Shivam", age: 30},
                //    {"name":"Saurabh", age: 25},
                //    {"name":"Student4", age: 22}]
             
            console.log(student.filter((object)=>object.age>=18));    
                