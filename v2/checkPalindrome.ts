/*

Problem 26.

Given the string, check if it is a palindrome.


*/

// ------ Original Way of Solving ------

// function checkPalindrome(word) {

//     if (word.length <= 1) return true;    
//     let reverseWord = '';

//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i];
//     }
//     return reverseWord === word;
// }

// ------ Refactored ------
function checkPalindrome(word: string): boolean {

    let start: number = 0;
    let end: number = word.length - 1;
    let checks = 0;

    while (start !== end) {
        checks++;
        if (word[start] === word[end]){
            start++;
            end--;
        } else {
            break;
        }
    }

    console.log(checks);

    return start === end;
}

console.log(checkPalindrome('abababababa'));
//console.log(checkPalindrome('aabaa'));
//console.log(checkPalindrome('abac'));
//console.log(checkPalindrome('a'));
//console.log(checkPalindrome('palindrome'));
//console.log(checkPalindrome('level'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -does the input string read forward equal
         the input string read backwards.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -reverseWord
2. Explore concrete examples.
    ('aabaa') returns true
    ('abac') returns false
    ('a') returns true
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -I believe to be O(n)
     etc.
    -no longer needed the extra if statement if word is only 1 digit.
    -added TypeScript Syntax.

*/
