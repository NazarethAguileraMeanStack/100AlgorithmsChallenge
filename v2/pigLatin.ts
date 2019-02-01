/*

Problem 80. Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of
an English word, moves it to the end of the word and suffixes an 'ay'.

If a word begins with a vowel you just add 'way' to the end.

Input strings are guranteed to be English words in all lowercase.

*/


// ------ Original Way of Solving ---------

// function pigLatin(str) {

//     let vowels = {'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u'};

//     if (vowels.hasOwnProperty(str[0])) {
//         return str + 'way';
//     } else {
//         let newWord = '';
//         let firstVowelIndex;
//         for (let i = 0; i < str.length; i++) {
//             if (vowels.hasOwnProperty(str[i])) {
//                 firstVowelIndex = i;
//                 break;
//             }
//         }
//         newWord = str.slice(0, firstVowelIndex);
//         return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';
//     }

// }

// ------ Refactored -------

function pigLatin(str: string): string {

    let vowels = {'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u'};

    if (vowels.hasOwnProperty(str[0])) { return str + 'way'; } 
    
    let firstVowelIndex: number;
    for (let i = 0; i < str.length; i++) {
        if (vowels.hasOwnProperty(str[i])) {
            firstVowelIndex = i;
            break;
        }
    }
    return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + 'ay';

}

console.log(pigLatin('glove'));
console.log(pigLatin('eight'));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, reword the string. If it starts with a consonant
         iterate through until you hit a vowel, place the substring to the
         back and then add 'ay'.
        -If it starts with a vowel, add 'way' to the end of the string.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -str, newWord
2. Explore concrete examples.
    ('glove') returns 'oveglay'
    ('eight') returns 'eightway'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -Added TypeScript Syntax.
    -Removed unnecessary variable declaration.

*/
