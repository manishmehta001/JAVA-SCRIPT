/*Print Matrix in wave form.
Logic:
● Print the first column in downward direction, then the second column in upward direction and so
on.
● Increment to next column whenever you reach the extremes of the current column, while
printing the matrix in column-wise fashion */

function PrintWaveMtrix(matrix) {
    const collength = matrix[0].length - 1;
    for (let col = 0; col <= collength; col++) {
        if (col % 2 == 0) {
            for (row = 0; row <= matrix.length - 1; row++) {
                console.log(matrix[row][col]);
            }
        }
        else {
            for (row = matrix.length - 1; row >= 0; row--) {
                console.log(matrix[row][col]);
            }
        }
    }
}
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
PrintWaveMtrix(matrix);