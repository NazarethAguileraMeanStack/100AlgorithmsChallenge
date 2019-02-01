/*

Problem 38.

You are given the string s. Your friend just asked you if it's
possible to change the string from s to string t by removing some
characters from it. You're a pro at programming so you decide to 
create a program to determine this.

*/

// ------ Original Way of Solving ------

// function convertString(orignalString, newString) {

//     let testString = "";
//     let pointer = 0;

//     for (let i = 0; i < orignalString.length; i++) {
//         if (orignalString[i] === newString[pointer]) {
//             testString += orignalString[i];
//             pointer++;
//         }
//     }
//     return testString === newString;
    
// }

// ------ Refactored ------
function convertString(orignalString: string, newString: string): boolean {

    if (newString.length > orignalString.length) return false;
    
    let testString: string = "", pointer: number = 0;

    for (let i = 0; i < orignalString.length; i++) {
        if (orignalString[i] === newString[pointer]) {
            testString += orignalString[i];
            pointer++;
        }
    }
    return testString === newString;
    
}

console.log(convertString('ceyodefthiyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given two words, can the second word be contstructed
         from the first word with order of chars in tact.
    b. What are the inputs that go in the problem?
        -two strings.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -originalString, newString
2. Explore concrete examples.
    ('ceyodefthiyg5h5yts', 'codefights') returns true
    ('addbyca', 'abcd') returns false

3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time
    -added TypeScript Syntax.
    -added edge case where if second string is longer than first,
     immediately return false since its impossible to construct
     second string from first.

*/

