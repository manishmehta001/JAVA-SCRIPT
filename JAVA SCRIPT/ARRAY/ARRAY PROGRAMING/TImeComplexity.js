function timeComplexity(array, num) {
    let obj = {};
    for (let i = 0; i <= array.length - 1; i++) {
        let FirstNumber = array[i];
        let SecondNumber = num - FirstNumber;
        if (!obj[FirstNumber.toString()]) {
            obj[FirstNumber.toString()] = i.toString();
        }
        if (obj[SecondNumber.toString()] && obj[SecondNumber.toString()] != [i].toString()) {
            console.log(FirstNumber, SecondNumber);
        }
    }
}
timeComplexity([10, 20, 40, 30, 5], 60);