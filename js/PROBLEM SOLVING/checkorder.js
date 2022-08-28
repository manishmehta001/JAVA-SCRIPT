/*Increasing or Decreasing Order =>
Problem – Given three numbers. Your task is to check the order of three numbers. If they
are in increasing order, print “Increasing order”. If they are in decreasing order, print
“Decreasing Order” else print “neither increasing or decreasing order”
 For example –
Input – 12, 45, 87
Output – Increasing order*/




// 12, 45, 87= i
//90, 32, 21= d
//4, 9, 1= none

function checkOrder(a, b, c)
{
    if (a<b && b<c)
    {
        console.log("increasing order");
    }
    else if (a>b && b>c)
    {
console.log("decreasing order");
    }
    else{
        console.log("neither increasing or decreasing");
    }
}
checkOrder(12, 45, 87);
checkOrder(90, 32, 21);
checkOrder(4, 9, 1);
