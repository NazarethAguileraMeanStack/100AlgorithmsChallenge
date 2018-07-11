/*

85. Reverse A String

-Reverse the provided String.

reverseAString("hello") returns "olleh".
reverseAString("Howdy") returns "ydwoH".

*/

function reverseAString(word){
    return word.split("").reverse().join("");
}

console.log(reverseAString("Hello"));
console.log(reverseAString("Howdy"));