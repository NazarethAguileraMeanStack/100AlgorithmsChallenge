/*
9. Check whther the give string is a subsequnce of the plaintext alphabet.


example:
for s = "effg", or s="cdce", the output should be false
for s = "ace" or s ="bxz", the output should be true

*Basically, check to make sure the letters go in logical alphabetical order

*/



function alphabetSubSequence(str){
    let testCase = str.split("").sort();
    let originalWord = str.split("");
    
    for (let i = 0; i < testCase.length; i++){
        if(testCase[i] == testCase[i + 1]){
            return false;
        }
    }

    if (testCase.join("") === originalWord.join("")){
        return true;
    }
    return false;


}

console.log(alphabetSubSequence("effg"));
console.log(alphabetSubSequence("cdce"));
console.log(alphabetSubSequence("atce"));
console.log(alphabetSubSequence("bxz"));
console.log(alphabetSubSequence("ace"));