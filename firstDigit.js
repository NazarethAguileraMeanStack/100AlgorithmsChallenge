/*
55. First Digit

EXAMPLE:

string = "var_1_int"; output should be "1".
string = "q2q-q"; output should be "2".
string = "0ss"; output should be "0".


*/


function firstDigit(word){
    
    let testWord = word.split(""); 

    for (let i = 0; i < testWord.length; i++){
        if (Number.isInteger(parseInt(testWord[i]))){
            return testWord[i];
        }
       }

}

console.log(firstDigit("var_1_int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));