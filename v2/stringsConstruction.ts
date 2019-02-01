/*

Problem 92. Strings Construction

How many strings equal to a can be constructed using letters from the string b?
Each letter can only be used once and only in one string.
*/

// ------ Original Way of Solving ------

// function stringsConstruction(smallWord, bigWord){

//     let count = 0;

//     let sortedSmallWord  = smallWord.split("").sort();
//     let sortedBigWord = bigWord.split("").sort();
//     let canStillSplit = true;

//     while (canStillSplit == true){

//         for (let j = 0; j < sortedSmallWord.length; j++){
//             if(sortedBigWord.includes(sortedSmallWord[j])){
//                 sortedBigWord.splice(sortedBigWord.indexOf(sortedSmallWord[j]),1);
//                 count++;
//             } else {
//                 canStillSplit = false;
//             }

//         }
//         console.log(count)

//     }


//     return Math.floor(count / smallWord.length);

// }

function stringsConstruction(smallWord: string, bigWord: string): number {

    let obj = {};
    let word: string = '';
    let index: number = 0;
    let wordConstruction = [];

    for (let i = 0; i < bigWord.length; i++) {
        (obj.hasOwnProperty(bigWord[i])) ? obj[bigWord[i]]++ : obj[bigWord[i]] = 1;
    }

    while (obj[smallWord[smallWord.length - 1]] !== 0) {
        if (obj[smallWord[index]] > 0) {
            word += smallWord[index];
            obj[smallWord[index]]--;
            index++;
            if (index === smallWord.length) {
                wordConstruction.push(word);
                word = '';
                index = 0;
            }
        } else {
            break;
        }
    }

    return wordConstruction.length;

}

console.log(stringsConstruction("abc", "abccba"));
console.log(stringsConstruction("abc", "abccbaabc"));
console.log(stringsConstruction("abc", "abccbaabcabc"));
console.log(stringsConstruction("Naz", "Nazareth"));
console.log(stringsConstruction("a", "aaa"));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given two strings, determine how many times the first string
         can be constructructed from the letters in the second string.
    b. What are the inputs that go in the problem?
        -two strings
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libaries needed.
    e. How should i label important pieces of data?
        -bigWord, smallWord, canStillSplit, count
2. Explore concrete examples.
    -a = "abc", b = "abccba", output should be 2.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(n^4) Quadratic time to O(n) Linear Time.
    -Made use of ternary operator
    -Made use of object.hasOwnProperty for validation.

*/


