/*

76. Missing Letters

-Find the missing letter int he passed letter range and return it.
If all letters are present in the range, return undefined.

EXAMPLE:

missingLetters("abce") should return "d"
missingLetters("abcdefghjklmno") should return "i".
missingLetters("abcdefghijklmnopqrstuvwxyz").


*/


function missingLetters(letters){

    let testArray = letters.split("");
    
    for (let i = 0; i < letters.length; i++){
        let iterator = letters.charCodeAt(i);
        if (iterator != letters.charCodeAt(0) + i){
            return String.fromCharCode(iterator - 1);
        }
    }


}

console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
