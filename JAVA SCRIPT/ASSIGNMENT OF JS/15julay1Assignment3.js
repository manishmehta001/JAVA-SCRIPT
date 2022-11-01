const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter Number : "));

if (num >= 0 && num <= 100000) {
  let br = parseInt(Math.sqrt(num));
  for (let i = 0; i <= br; i++) {
    for (let j = 0; j <= br; j++) {
      let sq = i * i + j * j;
      if (sq == num && i <= j) {
        console.log(i, j);
      }
    }
  }
}

              //or

                // finding the max squre value till number
/*function findMaxNum(num) {

    for (let a = 0; a <= num; a++) {

        for (let b = 0; b <= a; b++) {
            if (a * a + (b * b) == num) {
                if (a <= b) {
                    console.log("number pair is " + (a) + " and " + (b));
                }
            }
        }
    }
}
findMaxNum(50);*/