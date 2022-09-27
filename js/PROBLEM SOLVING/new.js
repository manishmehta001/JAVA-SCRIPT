/**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
//  var plusOne = function (digits) {
//     if (digits.length == 1 && digits[digits.length - 1] == 9) {
//         // digits[digits.length - 2] = [1];
//         // digits[digits.length - 1] = [0];
//       return digits;
//     } else if((digits.length-1) !==9) {
//       var toNum = parseInt(digits.join("")) + 1;
//       digits = toNum.toString().split("").map(Number);
//       //console.log(digits);
//       return digits;
//     }
//   };
//   console.log(plusOne([4,3,2,9]));
//   console.log(plusOne([4,3,2,2]));
//   console.log(plusOne([4,3,2,3]));

var plusOne = function (digits) {
    if (digits.length == 1 && digits[digits.lenghth - 1] == 9) {
      digits[digits.length - 2] = [1];
      digits[digits.length - 1] = [0];
  
      return digits;
    } else if (digits.length !== 1 && digits[digits.lenghth - 1]!== 9 )  {
      var toNum = (digits.join(""));
      digits = toNum.toString().split("").map(Number);
   digits[digits.length-1]=digits[digits.length-1]+1;
     console.log(digits);
      return digits;
    }
  }
  console.log(plusOne([4,3,2,9]));
//   console.log(plusOne([4,3,2,2]));
//   console.log(plusOne([4,3,2,3]));