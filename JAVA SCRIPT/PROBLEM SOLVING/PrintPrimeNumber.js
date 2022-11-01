// print prime number till n number.

function PrintPrime(n) {
    var isprime;
    for (let i = 2; i <= n; i++) {
        isprime = true;
        for (let j = 2; j <= i/ 2; j++) {
            if (i % j == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime == true) {
            console.log(i);
        }
    }
}

PrintPrime(10);
