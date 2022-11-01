/*Write a program to find the Frequency of all characters in the given string
Input: OCCURRENCE
Output:
O occurring 1 times
C occurring 3 times
U occurring 1 times
R occurring 2 times
E occurring 2 times
N occurring 1 times
Explanation:
1. split the string using split() function and it will give the array of letters
2. declare an empty object
3. Iterate the array and add the letter in the object as key and assign 0 as value if the key is not present in the
object
4. If the letter is already present as key in the object then add the values with 1
5. Finally iterate the object and log the occurrence */

function findFrequncyCounter(str){
    let obj={};
    const arr = str.split('');
    for(let i=0; i<=arr.length-1;i++){
        obj[arr[i]] = (obj[arr[i]] || 0)+1;
    }
    return obj;
}
console.log(findFrequncyCounter("OCCURRENCE"));