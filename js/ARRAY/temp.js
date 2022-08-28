// function increasingNumber(n){
//     if(n==0){
//         return;
//     }
//     increasingNumber(n-2);
//     console.log(n);
// }
// increasingNumber(10);

function findArrayIsSortedOrNot(array,i){
    if(i==array.length-1){
        return true;
    }
    if(array[i]>array[i+1]){
        return false;
    }
    return findArrayIsSortedOrNot(array,i-1);

}
const array=[3,4,1,5,6];
findArrayIsSortedOrNot(array,0);