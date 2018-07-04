/*
30. Common Character Count

-Given two strings, find the number of common characters between them.

EXAMPLE:
s1 = "aabcc" and s2 = "adcaaa"; the output should be 3.

Strings have 3 common characters: 2 "a"'s and 1 "c".

*/



function commonCharacterCount(word1, word2){
    let wordArray = [];
    let word1Array = word1.split("");
    let word2Array = word2.split("");

    for(let i = 0; i < word1Array.length; i++){
        for (let j = 0; j < word2Array.length; j++){
            if(word1Array[i] === word2Array[j]){
                wordArray.push(word1Array[i]);
                i++;
            }
        }
    }
    
    return wordArray.length;
}


console.log(commonCharacterCount("aabcc", "adcaa"));
console.log(commonCharacterCount("Nazareth", "JavaScript"));
console.log(commonCharacterCount("Hello", "World"));
console.log(commonCharacterCount("Hello", "Hello"));