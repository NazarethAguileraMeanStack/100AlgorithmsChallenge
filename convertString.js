/*
38. Convert String

-You are given a string s.Your friend just asked you to change the string from s,
to a string t by removing some characters from it. You are pro at programming, so you
decide to create a program to determine this.

EXAMPLE:
s = "ceoydefthf5iyg5h5yts" and t = "codefights", output should be convertString(s,t) = true;

s = "addbyca" and t = "abcd", the output convertString(s,t) = false.


*/


function convertString(oldWord, newWord){
    let oldWordLetters = oldWord.split("");
    let newWordLetters = newWord.split("");
    let testArray = [];
    let testArraySingleLetters = [];
    for(let i = 0; i < newWord.length; i++){
        let testLetter = oldWordLetters.filter((element)=>{return element == newWordLetters[i]});
        testArray.push(testLetter);
    }

    for (let i = 0; i < testArray.length; i++){
        testArraySingleLetters.push(testArray[i][0]);
    }

    return testArraySingleLetters.join("") == newWord;

}

console.log(convertString("sNdafzgahrkeltjhf", "Nazareth"));
console.log(convertString("abhijklmnop", "abcdef"));