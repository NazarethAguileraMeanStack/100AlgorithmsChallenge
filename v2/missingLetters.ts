/*

Problem 76. Missing Letters

Find the missing letter in the passed letter range and
return it.

If all letters are present in the range, return undefined.

*/

// ------ Original Way of Solving ------

// function missingLetters(str) {

//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let pointer = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (alphabet[pointer] === str[i]) {
//             pointer++;
//         }
//     }

//     return alphabet[pointer];
// }

function missingLetters(str: string): string {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz', pointer: number = 0;
    return abcSlider(str);

    function abcSlider(letters) {
        if (pointer === alphabet.length) return undefined;
        if (alphabet[pointer] !== letters[pointer]) return alphabet[pointer];
        pointer++;
        return abcSlider(letters);
    }
}

console.log(missingLetters('bce'));
console.log(missingLetters('abce'));
console.log(missingLetters('abcdefghjklmno'));
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a string of alphabetic letters in order according
         to the english alphabet, find the missing letter in the string.
         If there is no letter missing, return undefined.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string or undefined
    d. Can the outputs be determined from the inputs?
        -Yes, but you will need to know the english alphabet
    e. How should i label important pieces of data?
        -missingLetter
2. Explore concrete examples.
    ('abce') returns 'd'
    ('abcdefghjklmno') returns 'i'
    ('abcdefghijklmnopqrstuvwxyz') returns undefined
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -exchanged for-loop for a recursive helper function.
    -added TypeScript Syntax.
    -Took advantage of multiple variable declarations on one line.

*/



