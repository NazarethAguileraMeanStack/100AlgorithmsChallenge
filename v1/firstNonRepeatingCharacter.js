/*

57. First Non-Repeating Character

-Write a solution that iterates over the string once and uses O(1) additional memeory, since this is what
you would be asked to do during a real interview.

-Given a string, find and return the first instance of a non-repeating character in it. If there is no such 
character, return '-'

EXAMPLE:

for s = "abacabad", the output should be "c".

There are 2 non-repeating characters in the string "c" and "d". Return "c" since it comes first.

for s = "abacababaabacaba", the output should be "-"

There are no characters that do no repeat.


*/


function firstNonRepeatingCharacter(word){
    let testWord = word.split("").sort();

    for (let i = 0; i < testWord.length; i++){
        if (testWord[i - 1] != testWord[i] && testWord[i] != testWord[i + 1]){
            return word[word.indexOf(testWord[i])];
        }
    }

    return "-";

}

console.log(firstNonRepeatingCharacter("abacabad"));
console.log(firstNonRepeatingCharacter("abacababaabacaba"));
console.log(firstNonRepeatingCharacter("Nazareth"));
console.log(firstNonRepeatingCharacter("JavaScript"));

