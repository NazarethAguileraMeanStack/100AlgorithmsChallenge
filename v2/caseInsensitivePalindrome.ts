/*

Problem 23.

Given a string, check it if can become a palindrom through
a case change of some (possibly none) letters.

*/

// ------ Original Way of Solving ------
// function caseInsensitivePalindrome(word) {
//     let reverseWord = word.split('').reverse().join('').toLowerCase();
//     return reverseWord === word.toLowerCase();
// }


// ------ Refactored ------
function caseInsensitivePalindrome(word) {
    if (word.length <= 1) return true;
    return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
}

console.log(caseInsensitivePalindrome('AaBaa'));
console.log(caseInsensitivePalindrome('aabaa'));
console.log(caseInsensitivePalindrome('abaac'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Regardless of upper or lowercase, is the word
         a palindrome.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resouces needed.
    e. How should i label important pieces of data?
        -reverseWord
2. Explore concrete examples.
    ('AaBaa') output should be true.
    ('aabaa') output should be true.
    ('abac') output should be false.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor

*/


