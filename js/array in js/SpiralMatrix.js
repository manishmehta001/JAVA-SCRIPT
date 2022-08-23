/*Print Matrix in Spiral form 
              [
              [1,--2,--3,--4],
                           |
              [5,--6,--7,  8],
               |       |   |
              [9,  10,-11, 12],
               |            |
              [13,-14,-15,--16]
              ];                                     */

function PrintSpiralMtrix(matrix){
    let startRow=0;
    let startCol=0;
    let endRow=matrix.length-1;
    let endCol=matrix[0].length-1;
    while(startRow<endRow && startCol<endCol){
    //first loop from 1st row,1st col to 1st row ,end col
    for(let i=startCol; i<=endCol; i++){
        console.log(matrix[startRow][i]);
    }
    startRow= startRow + 1;
    //2nd loop from 2nd row and end col to end row and end col 
    for(let i=startRow; i<=endRow; i++){
        console.log(matrix[i][endCol]);
    }
    //3rd loop from end row and end col to start col and end row
    endCol = endCol-1;
    for(let i=endCol; i>=startCol; i--){
        console.log(matrix[endRow][i]);
    }
    //4th loop from start col and 3rd row to start col and 2nd row
    endRow=endRow-1;
    for(let i=endRow; i>=startRow; i--){
        console.log(matrix[i][startCol]);
    }
    startCol=startCol + 1;
    // for(let i=startCol;i<=endCol; i++){
    //     console.log(matrix[startRow][i]);
    // }
    // for(let i=endCol; i>=startCol; i--){
    //     console.log(matrix[endRow][i]);
    // }
    }
}
const matrix =[
              [1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]
              ];
PrintSpiralMtrix(matrix);