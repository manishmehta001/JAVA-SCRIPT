/* write a programe to print sum of even number 0 to 100 */

let counter = 1;
sum = 0;
while(counter<=100){
    if(counter % 2 == 0){
        sum = sum + counter;
    }
    counter++;
}
console.log(sum);