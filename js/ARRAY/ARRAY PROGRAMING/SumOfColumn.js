/*Problem - 
Given a 2D array of size MxN, you need to display N integers which
denotes the column wise addition of the 2D array
Input:
M=4,N=3
[3, 4, 5]
[3, 4, 2]
[2, 3, 4]
[4, 4, 4]
Output:
12,15,15
Explanation:
Sum of column-1 : 3+3+2+4= 12
Sum of column-2 : 4+4+3+4 = 15
Sum of column-3 : 5+3+4+4 = 15 */

function sumOfCol(matrix) {
    const result = [];
    //go through the each column
    for (let j = 0; j <= matrix[0].length - 1; j++) {
        let sum = 0;
        //go through the each row
        for (let i = 0; i <= matrix.length - 1; i++) {
            sum += matrix[i][j];
        }
        result.push(sum);   
    }
    console.log(result);
}
const matrix1 = [
    [3, 4, 5],
    [3, 4, 2],
    [2, 3, 4],
    [4, 4, 4]]
sumOfCol(sumOfCol(matrix1)); 