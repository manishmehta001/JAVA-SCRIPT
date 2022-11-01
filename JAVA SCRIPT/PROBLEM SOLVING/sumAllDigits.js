/* write a programe to sum of digit given a number */

function sumOfAllDigits(num){
    let total = 0;
    while (num!=0){
        total += num%10;
        num = parseInt(num/10);
    }
    return total;
}
console.log(sumOfAllDigits(1234));