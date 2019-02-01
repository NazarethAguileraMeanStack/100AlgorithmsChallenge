/*

Problem 45. Enclose in Brackets.

Given a string, enclose it in brackets.

*/

// ------ Original Way of Solving ------

// function encloseInBrackets(str) {
//     return '(' + str + ')';
// }

// ------ Refactored ------
function encloseInBrackets(str:string): string {
    return `(${str})`;
}
console.log(encloseInBrackets('abacaba'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, return the string but with 
        parenthesis surrounding it"
    b. What are the inputs that go in the problem?
        -A string
    c. What are the outputs that should come from the problem?
        -A string
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -str
2. Explore concrete examples.
    ('abacaba') returns '(abacaba)'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time
    -Added TypeScript Syntax
    -Changed from expression to template literal.
*/

