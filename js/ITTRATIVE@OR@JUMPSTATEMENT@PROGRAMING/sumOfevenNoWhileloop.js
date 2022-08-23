/* write a programe to print  of even number 0 to 100 */

function SumOfEvenNumber(evenNo){
let counter = 1;
sum = 0;
while(counter<=evenNo){
    if(counter % 2 == 0){
        sum = sum + counter;
    }
    counter++;
}
console.log(sum);
}
SumOfEvenNumber(100);
SumOfEvenNumber(10);