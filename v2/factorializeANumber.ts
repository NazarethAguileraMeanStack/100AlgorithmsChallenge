/*

Problem 49. Factorialize a Number

Return the factorial of the provided integer.

*/


// ------ Original Way of Solving ------

// function factorializeANumber(num) {

//     let product = 1;

//     for (let i = num; i > 1; i--) {
//         product *= i;
//     }
//     return product;
// }


// ------ Refactored ------

function factorializeANumber(num: number): number {
    return (num === 1) ? 1 : num * factorializeANumber(num - 1);
}


console.log(factorializeANumber(5));
console.log(factorializeANumber(10));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a number, return the factorial of that number.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, but you may need to look up the definition of a factorial.
    e. How should i label important pieces of data?
        -product
2. Explore concrete examples.
    (5) returns 120
    (10) returns 3628800.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -Made use of recursion.
    -Made use of ternary operator.
    -added TypeScript Syntax.
    -Reduced code to only one line.

*/

