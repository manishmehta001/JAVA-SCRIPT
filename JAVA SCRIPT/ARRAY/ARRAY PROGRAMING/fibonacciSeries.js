function findNthPositionFibSeries(n) {
  if (n < 1) {
    return -1;
  }
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }


  let series = [0, 1];
  for (let i = 2; i <= n - 1; i++) {
    let newNum = series[i - 1] + series[i - 2];
    series.push(newNum); //push() function is allow to add new collection of array
  }
  console.log(series[n - 1]);
}
findNthPositionFibSeries(2);
findNthPositionFibSeries(5);
findNthPositionFibSeries(8);
findNthPositionFibSeries(24);
findNthPositionFibSeries(87);
