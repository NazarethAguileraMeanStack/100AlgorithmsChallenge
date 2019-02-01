/*

Problem 82. Proper Noun Correction

Correct a given proper noun so that it fits this statement.

noun = 'pARiS' returns 'Paris'.

noun = 'John' returns 'John'

*/


// ------ Original Way of Solving -------

// function properNounCorrection(str) {
//     return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
// }

// ------ Refactored -------

function properNounCorrection(str: string): string {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
}


console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, return it so that the first letter is capitalized,
         while all other characters are lowercase.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -
    e. How should i label important pieces of data?
2. Explore concrete examples.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -added TypeScript Syntax.
    -One line of Code!!!

*/
