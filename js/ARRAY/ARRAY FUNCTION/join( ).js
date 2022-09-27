/*join()==>

•Definition and Usage==>
•The join() method returns an array as a string.
•The join() method does not change the original array.
•Any separator can be specified. The default is comma (,).

Example==> */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let str = fruits.join();
console.log(str);
/*Expected output = Banana,Orange,Apple,Mango 
Syntax==>
array.join(separator)==>The separator to be used.Default is a comma.
Example==>   */
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.join(''));
/*expected output= BananaOrangeAppleMango        */