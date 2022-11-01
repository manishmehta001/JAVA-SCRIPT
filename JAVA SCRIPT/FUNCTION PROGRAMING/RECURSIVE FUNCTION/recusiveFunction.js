/* what is Recursion in java script?
Recursion==> recursion is a technique for itreating over an opreation by having a function call itself
            repeatedly until it arrives at a result.             */

function GetPower(num,power){
    if(power==1){
        return num;
    }
    else{
        return num * GetPower(num,power-1);
    }
}
console.log("result is: ",+ GetPower(4,3));

function printNumber(n){
    if(n==0){
        return;
    }
     if(n%2!=0){
         console.log(n);
     }
    return printNumber(n-1);

}
printNumber(10);
