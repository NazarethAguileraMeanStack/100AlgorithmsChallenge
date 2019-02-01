/*

Problem 9.

Check whether the given string is a subsequence of the plaintext alphabet

*/


// ------ Original way of solving it ------

// function alphabetSubSequence(word){

//     let stationaryPointer = 0; 
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
//     for (let i = 0; i < alphabet.length; i++){
//         if (word[stationaryPointer] === alphabet[i]){
//             stationaryPointer++;
//         }
//     }

//     console.log(stationaryPointer);
//     if (stationaryPointer == word.length){
//         return true;
//     } else {
//         return false;
//     }
// }


// ------ Refactored ------

function alphabetSubSequence(word: string): boolean {

    let __word: string = word.toLowerCase();
    let pointer: number = 0; 
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < alphabet.length; i++){
        if (__word[pointer] === alphabet[i]){
            pointer++;
        }
    }
    
    return pointer === word.length;
}

console.log(alphabetSubSequence('effg'));
console.log(alphabetSubSequence('cdce'));
console.log(alphabetSubSequence('ace'));
console.log(alphabetSubSequence('bxz'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a string, do the letters of the string
         occur in an increasing order of the english
         alphabet
    b. What are the inputs that go in the problem?
        -single string
    c. What are the outputs that should come from the problem?
        -return a true or false
    d. Can the outputs be determined from the inputs?
        -yes, no additional libraries needed.
    e. How should i label important pieces of data?
        -stationaryPointer, movingPointer
2. Explore concrete examples.
    ('effg') returns false
    ('ace') returns true
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -Kept O(n)
    -eliminated if-else at end of function
    -added .toLowerCase to ensure input is correct.
    -added TypeScript Syntax
    -more meaningful variables.
*/