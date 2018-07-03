/*
26. Check Palindrome

-Given the string, check if its a palindrome.

EXAMPLE:
"aabaa"; returns true.
"abac"; returns false.
"a"; returns true.

*/


function checkPalindrome(word){
    return (word.toLowerCase() === word.toLowerCase().split("").reverse().join(""));
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));