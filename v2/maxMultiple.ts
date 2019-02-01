/*

Problem 75. Max Multiple

Given a divisor and a bound, find the largest integer N such that:
-N is divisible by divisor.
-N is less than or equal to bound.
-N is greater than 0.

It is guranteed that such a number exists.

*/

// ------ Original Way of Solving ------

// function maxMultiple(divisor, bound) {
//     return divisor * Math.floor(bound / divisor);
// }

function maxMultiple(divisor: number, bound: number): number {
    return divisor * Math.floor(bound / divisor);
}

console.log(maxMultiple(3, 10));
console.log(maxMultiple(3, 30));
console.log(maxMultiple(3, 29));
console.log(maxMultiple(3, 16));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -find the largest multiple of the divisor, that is less
         than or equal to bound.
    b. What are the inputs that go in the problem?
        -a number, a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
2. Explore concrete examples.
    divisor = 3 and bound = 10, returns 9.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(1) constant time
    -added TypeScript Syntax
    -One line of code!

*/
