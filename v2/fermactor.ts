/*

Problem 52. Fermactor

Fermat's factorization method is:

if a * b =n, (where a <= b), then there exist some c and d
such that n = c^2 - d^2. Your goal is to return for given n
such c and d as an array. Since we want c and d to be uniquely
determined, in all test cases n is a semiprime number.



*/


// ------ Original Way of Solving ------

// function fermactor(num) {

//     let firstNum, secondNum;
//     firstNum = secondNum = Math.floor(num / 2);

//     while (firstNum > 0) {
//         while (secondNum > 0) {
//             if (Math.pow(firstNum, 2) - Math.pow(secondNum, 2) === num) {
//                 return [firstNum, secondNum];
//             }
//             secondNum--;
//         }
//         firstNum--;
//         secondNum = firstNum;
//     }

//     return undefined;
// }

// ----- Refactored ------

function fermactor(num: number): number[] {

    let firstNum: number = Math.ceil(Math.sqrt(num));
    let secondNum: number = firstNum - num;
    let perfectSquare: boolean = isSquare(secondNum);

    while (perfectSquare !== true) {
        firstNum++;
        secondNum = firstNum - num;
        perfectSquare = isSquare(secondNum);
    }
    

    function isSquare(n) {
        return  n > 0 && Math.sqrt(n) % 1 === 0;
    }

    return [Math.sqrt(firstNum), secondNum];
}

console.log(fermactor(15));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -find the lowest possible pair of numbers,
         where the first number squared, minus the second
         number squared, equals a given number.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -an array of numbers.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -firstNum, secondNum
2. Explore concrete examples.
    (15) should return [4,1].
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved Big O from O(n^2) Quadratic to O(n) linear time.
    -Made use of a helper function.
    -Did need to create a new variable to keep track if logic was true;
    -Added TypeScript Syntax.

*/

