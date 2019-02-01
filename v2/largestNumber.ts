/*

Problem 69. Largest Number

For n = 2, the output should be 99.

*/


// ------ Original Way of Solving ------

// function largestNumber(num) {

//     let digits = '';

//     for (let i = 0; i < num; i ++) {
//         digits += '9';
//     }

//     return parseInt(digits);
// }

// ------ Refactored -------

function largestNumber(num: number) {
    if (num === 0) return;
    return parseInt('9' + largestNumber(num - 1));
}

console.log(largestNumber(1));
console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(4));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a number, return '9' + '9' + '9', etc..., depending
         on the number of digits given.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -num, digits
2. Explore concrete examples.
    For n = 2, the output should be 99.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -Made use of recursion.
    -eliminated unnecessary variable declarations.
    -added TypeScript Syntax.

*/

