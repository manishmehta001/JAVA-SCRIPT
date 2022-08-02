 /*Assignment 2

Requirements:
"Practise Problem 2 : Create a program to print all prime palindromes under 50.*/

function isPrime(num) {
    if (num == 1 || num == 0) 
    {
      return false;
    } 
    else
    {
    for (let i = 2; i < num; i++)
    { 
      
        if (num % i === 0)
         {
          return false;
         }
        
    }
    return true;
  }
} 
  function palindrome(num) {
    var rev = 0,
      x,
      origin = num;
    while (num > 0) {
      x = num % 10;
      rev = rev * 10 + x;
      num = parseInt(num / 10);
    }
    if (origin == rev && isPrime(rev) == true) {
      console.log(rev);
    }
  }
  function lapo(num) {
    for (let i = 0; i <= num; i++) {
      palindrome(i);
    }
  }
  
  lapo(50);