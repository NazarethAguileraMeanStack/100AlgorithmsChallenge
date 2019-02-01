/*

78. Palindrome Rearranging

-Given a string, find out if its chracters can be rearranged to form a palindrome.

inputString["aabb"]; output should be true.

You can rearrange "aabb" to make "abba", which is a palindrome.

*/


function rearrangePalindrome(word){

    let testWord = word.split("").sort();

    for (let i = 0; i < testWord.length; i++){
        if (testWord[i] == testWord[i + 1]){
            testWord.splice(i,4);
        }
    }

    return (testWord.length <= 1);

}

console.log(rearrangePalindrome("aabb"));
console.log(rearrangePalindrome("racecar"));
console.log(rearrangePalindrome("Nazareth"));
console.log(rearrangePalindrome("tesla"))