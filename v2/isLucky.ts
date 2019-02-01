/*

Problem 66. Is Lucky

Ticket number usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first digits
is equal to the sum of the second half.

Given a ticket number n, determine if its lucky or not.

*/


// ------ Original Way of Solving ------

// function isLucky(num) {
//     let strNum = num.toString();
//     let firstHalfSum = 0;
//     let secondHalfSum = 0;
//     for (let i = 0; i < strNum.length; i++) {
//         if ( i < strNum.length / 2) {
//             firstHalfSum += parseInt(strNum[i]);
//         } 
//         if (i >= strNum.length / 2) {
//             secondHalfSum += parseInt(strNum[i]);
//         }
//     }

//     return firstHalfSum === secondHalfSum;
// }

// ------ Refactored ------

function isLucky(num: number): boolean {
    let firstHalfSum: number = 0, secondHalfSum: number = 0, strNum: string = num.toString();

    for (let i = 0; i < strNum.length; i++) {
        ( i < strNum.length / 2) ? firstHalfSum += +strNum[i] : secondHalfSum += +strNum[i];
    }

    return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number with an even number of digits,
         determine if the first half of digits sum equal
         the sum of the second half of digits.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -firstHalfSum, secondHalfSum
2. Explore concrete examples.
    (1230) returns true;
    (239017) returns false;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -declared multiple variables in a single line.
    -made use of ternary operator.
    -made use of explicit type conversion.
    -added TypeScript Syntax.
*/

