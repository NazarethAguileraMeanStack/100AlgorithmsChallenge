/*

Problem 25.

Given a character, check if it represents an odd digit
or not a digit at all.

*/


// ------ Original Way of Solving ------

// function characterParity(char) {
//
//     if (parseInt(char)) {
//         if (char % 2 === 0) {
//             return 'even';
//         } else {
//             return 'odd';
//         }
//     } else {
//         return 'not a digit';
//     }
// }

// ------ Refactor ------
function characterParity(char: string): string {
    if (!+char) return 'not a digit';
    return (+char % 2 === 0) ? 'even' : 'odd';
}

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
console.log(characterParity('0'));





/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -check if the character given is a number,
         if it its, check whether it is odd or even.
         -else return 'not a digit'
    b. What are the inputs that go in the problem?
        -a single character, string.
    c. What are the outputs that should come from the problem?
        -'odd', 'even', or 'not a digit'
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -num
2. Explore concrete examples.
    -('5') returns 'odd'
    -('8') returns 'even'
    -('q') returns 'not a digit'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time function.
    -made use of ternary operator.
    -used type conversion using the + symbol rather than parseInt
     since it is slightly faster.
    -added TypeScript Syntax.

*/

