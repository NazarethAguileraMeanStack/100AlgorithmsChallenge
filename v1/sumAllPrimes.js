/*

93. Sum All Primes

-Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than and having only two divisors, one
and itself. 

EXAMPLE:

sumAllPrimes(10) should return 17.
sumAllPrimes(977) should return 73156.

*/

function sumAllPrimes(num){

    let primes = [];

    for (let i = 2; i <= num; i++) {

        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j == 0 && j != i) {
                isPrime = false;
            }
        }
        if (isPrime == true) {
            primes.push(i);
        }
    }

    return primes.reduce((total, element)=>{return total += element});

}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));