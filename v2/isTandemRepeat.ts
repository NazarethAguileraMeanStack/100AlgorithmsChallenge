/*

Problem 67. Is Tandem Repeat

Determine whether the given string can be obtained by one
concatenation of some string to itself.

*/

// ------ Original Way of Solving ------

// function isTandemRepeat(str){

//     if (str.length % 2 !== 0) {
//         return false;
//     }

//     let word = str.slice(str.length / 2);
//     return (word + word) === str;

// }

// ------ Refactored -------

function isTandemRepeat(str: string): boolean {

     return (str.length % 2 !== 0) ? false : str.slice(0, (str.length / 2)) === str.slice(str.length / 2);

}

console.log(isTandemRepeat('tandemtandem'));
console.log(isTandemRepeat('qqq'));
console.log(isTandemRepeat('2w2ww'));
/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
    b. What are the inputs that go in the problem?
    c. What are the outputs that should come from the problem?
    d. Can the outputs be determined from the inputs?
    e. How should i label important pieces of data?
2. Explore concrete examples.
    ('tandemtandem') returns true
    ('qqq') returns false
    ('2w2ww') returns false;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -added TypeScript Syntax.
    -eliminated unnecessary variable declaration
    -made use of ternary operator
    -One line of code!!!!
*/

