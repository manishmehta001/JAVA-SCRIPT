function SumOfTriangle(matrix) {
    let upperTriangleSum = 0;
    let lowerTriangleSum = 0;
    for (let i = 0; i <= matrix.length - 1; i++) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
            if (i <= j) {
                upperTriangleSum += matrix[i][j];
            }
            if (j <= i) {
                lowerTriangleSum += matrix[i][j];
            }
        }
    }
    console.log("upperTriangleSum ", upperTriangleSum);
    console.log("lowerTriangleSum ", lowerTriangleSum);

}
const matrixx = [
    [2, 15, 4],
    [1, 2, 15],
    [2, 10, 7]
];
const matr = [
    [3, 4, 5],
    [3, 4, 2],
    [2, 3, 4]
];
SumOfTriangle(matrixx);
SumOfTriangle(matr);