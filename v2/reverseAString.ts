/*

Problem 85. Reverse A String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.


*/


// ------- Original Way of SOlving -------

// function reverseAString(str) {

//     let reverseWord = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseWord += str[i];
//     }

//     return reverseWord;
// }

// ------- Refactored --------

function reverseAString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        given a string, return the reverse version of it.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resouces needed
    e. How should i label important pieces of data?
        -reverseWord
2. Explore concrete examples.
    ('hello') returns 'olleh'
    ('Howdy') returns 'ydwoH'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -removed unnecessarry variable declarations.
    -added TypeScript Syntax.
    -One line of code!!!

*/

