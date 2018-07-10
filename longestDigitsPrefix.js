/*

72. Longest Digits Prefix

-Given a string, output its longest prefix which contains only digits.

EXAMPLE:

inputString = "123aa1", the output should be longestDigitsPrefix() = "123".


*/


function longestDigitsPrefix(word){
    
    let endIndex = 0;
    
    for (let i = 0; i < word.length; i++){
        if (!parseInt(word[i])){
            endIndex = i;
            break;
        }
    }

    return word.substring(0, endIndex);
}


console.log(longestDigitsPrefix("123aa1"));
console.log(longestDigitsPrefix("12345abcjaidso"));