/*

Problem 72. Longest Digits Prefix

Given a string, output its longest prefix which contains only digits.
*/

// ------ Original Way of Solving ------

// function longestDigitsPrefix(str) {

//     let prefix = '';

//     for (let i = 0; i < str.length; i++) {
//         if (parseInt(str[i])) {
//             prefix += str[i];
//         } else {
//             break;
//         }
//     }

//     return prefix;
// }

// ------ Refactored ------
function longestDigitsPrefix(str: string): string {

    let prefix: string = str.replace(/[a-zA-Z]/g, '@');
    let nonDigit: number = prefix.indexOf('@');
    return prefix.slice(0, nonDigit);
}

console.log(longestDigitsPrefix('123aa1'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, starting from the front, return
         the string until you hit the first non-numeric character.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string of numeric characters
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -prefix, str
2. Explore concrete examples.
    ('123aa1') returns '123'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -removed for-loop replacing it with .slice().
    -made use of regex.
    -added TypeScript Syntax

*/

