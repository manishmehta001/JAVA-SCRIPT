/* Problem Statement-2: 

Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given) then find the position where the Ath item will be delivered.
Note: Distribution of Items are performed at the adjacent positions starting from C.
Expected Input: Three integers A, B, C 
Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C.
Example-1:
Input
2,5,1
Output=2

Example-2:
Input
8,5,2
Output=4    */

function deliveryboy(A, B, C) {
    let count = 0;
    for (var i = C; i <= B; i++) {
      if (i == B && count != A) {
        i = 0;
      }
      count++;
      if (count == A) {
        break;
      }
    }
    console.log(i);
  }
  
  deliveryboy(2, 5, 1);
  deliveryboy(8, 5, 2);