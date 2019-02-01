/*
23. Case Sensitive Palindrome


-Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.


EXAMPLE:
inputString = "AaBaa", the output should be true.
inputString = "abac", the output should be false.

*/


function caseSensitivePalindrome(word){
    return (word.toLowerCase() === word.toLowerCase().split("").reverse().join(""));
}

console.log(caseSensitivePalindrome("AaBaa"));
console.log(caseSensitivePalindrome("abac"));
console.log(caseSensitivePalindrome("RaCecaR"));