/*

92. 

-How many strings equal to a can be constructed using letters from the string b?
Each letter can only be used once and only in one string.

a = "abc", b = "abccba", output should be 2.

*/


function stringsConstruction(smallWord, bigWord){

    let count = 0;

    let sortedSmallWord  = smallWord.split("").sort();
    let sortedBigWord = bigWord.split("").sort();
    let canStillSplit = true;

    while (canStillSplit == true){

        for (let j = 0; j < sortedSmallWord.length; j++){
            if(sortedBigWord.includes(sortedSmallWord[j])){
                sortedBigWord.splice(sortedBigWord.indexOf(sortedSmallWord[j]),1);
                count++;
            } else {
                canStillSplit = false;
            }

        }
        console.log(count)

    }


    return Math.floor(count / smallWord.length);

}

console.log(stringsConstruction("abc", "abccba"));
console.log(stringsConstruction("abc", "abccbaabc"));
console.log(stringsConstruction("abc", "abccbaabcabc"));
console.log(stringsConstruction("Naz", "Nazareth"));
console.log(stringsConstruction("a", "aaa"));



