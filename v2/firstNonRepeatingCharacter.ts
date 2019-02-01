/*

Problem 57. First Not Repeating Character

Note: Write a solution that only iterates once and uses O(1) additional
memory, since this is what you will be asked to do in a real interview.

Given a string s, find and return the first instance of a non-repeating character
in it. If there is no such character, return '_'.


*/

// ------ Original Way of Solving -------

// function firstNotRepeatingCharacter(str) {

//     let nonDuplicate = '_';
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 counter++;
//             }
//         }
//         if (counter === 1) {
//             return str[i];
//         }
//         console.log(counter);
//         counter = 0;
//     }

//     return nonDuplicate;
// }

// ------ Refactored ------

function firstNotRepeatingCharacter(str: string): string {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = (obj.hasOwnProperty(str[i])) ? obj[str[i]] + 1 : 0;
    }
    
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 0) return str[i];
    }
    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaababacaba'));
console.log(firstNotRepeatingCharacter('aaaaaaaaaacbbbbbbbb'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -find the first char in the string that does not repeat.
         if there are none, return '_'
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a char
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -char, str
2. Explore concrete examples.
    ('abacabad') returns 'c'
    ('abacabaababacaba') returns '_'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -imporved from Quadratic Time O(n^2) to Linear Time O(n).
    -removed unnecessary counter variable declaration.
    -took advantage of the object's property of only holding one unique key.
    -added TypeScript Syntax.
    -Made use of ternary operator
    
*/

