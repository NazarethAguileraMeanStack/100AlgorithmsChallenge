/*

Problem 34.

Check if a string (first argument, str) ends with the given
target string (second argument, target).

This challenge can be solved with .endsWith method, which was
intorduced in ES2015. But for the purpose of this challenge, we
would like you to use one of the JavaScript substring methods instead.


*/


// ------ Original Way of Solving ------

// function confirmEnding(bigWord, smallWord) {
//     let test = bigWord.substring(bigWord.length - smallWord.length);
//     return test === smallWord;
// }


// ------ Refactored -------

function confirmEnding(bigWord: string, smallWord: string): boolean {
    return bigWord.substring(bigWord.length - smallWord.length) === smallWord;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given two strings, check if the first string
         ends with the second string
    b. What are the inputs that go in the problem?
        -two strings.
    c. What are the outputs that should come from the problem?
        -boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libraries needed.
    e. How should i label important pieces of data?
2. Explore concrete examples.
    ('Abstraction', 'action') returns true;
    ('Open sesame', 'pen') returns false;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time.
    -eliminated unnecessary variable.
    -added TypeScript syntax.
    -made one line.

*/

