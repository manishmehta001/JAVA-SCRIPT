// function printDiagonal(arr) {
//     let flag;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (i == j) {
//           //00,11,22,33
//           if (arr[i][j] !== 0) {
//             flag = true;
//           }
//         } else if (arr[i][j] !== 0) {
//           //01,02,03,04
//           return false;
//         }
//       }
//     }
//     if (flag == true) return "this is a matrix";
//   }

//   let array = [
//     [1, 0, 1, 0],
//     [0, 2, 0, 0],
//     [0, 0, 3, 0],
//     [0, 0, 0, 4],
//   ];

//   console.log(printDiagonal(array));
/* 
function fruits(arr){
  for(let i=0; i<arr.length; i++){
    let temp=[];
    temp += arr[i];
    console.log(temp);
  }

}
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits(fruit);*/
/*
=>jab koi temp variable kisi loop ke upar define hota hai to wo sare itrative element ko store karke ek 
sath sab print kar deta hai 
=>aur agar wahi temp loop ke ander define hota hai to ek ek karke value store karta hai aur line by 
line print karta hai */

function findNthPositionInFibonancci(n) {
  var result;
  if (n < 1) return -1;
  if (n == 1) return 0;
  if (n == 2) return 2;

  // Start loop
  var i = 2;
  let series = [0, 1];
  while (i <= n - 1) {
    let newNum = series[i - 1] + series[i - 2];
    series.push(newNum);
    i++;
  }
  console.log(series[n - 1]);
}
findNthPositionInFibonancci(5);
