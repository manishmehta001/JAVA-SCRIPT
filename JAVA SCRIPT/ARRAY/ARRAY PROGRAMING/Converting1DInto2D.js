/*Problem ==> Given a 1D array of size 10 , convert it into a 2D array of size 2x5 */

function convert1Dinto2D(array) {
    var nArr = [];
    while (array.length > 0) {
        nArr.push(array.splice(0, 2));
    }
    console.log([nArr]);
}
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
convert1Dinto2D(array);