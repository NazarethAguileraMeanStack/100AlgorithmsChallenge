/*

75. Max Multiple

-Given a divisor and a bound, find the largest integer N such that:

N is divisible by the divisor.
N is less than or equal to bound.
N is greater than 0.

EXAMPLE:

divisor = 3 and bound = 10, the output should be 9.
The largest integer divisible by 3 and not larger than 10 is 9.

*/

function maxMultiple(divisor, bound){

    for (let i = bound; i > divisor; i--){
        if (i % divisor == 0){
            return i;
        }
    }

}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(3, 20));