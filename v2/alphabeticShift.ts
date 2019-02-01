/*
Problem 8.

Given a string, replace each of its character by the one next in
the english alphabet (z would be replaced by a)


*/


// ------ Original way of solving it ------

// function alphabeticShift(word){
//     let lookup = {
//             a: 'b', b: 'c', c: 'd', d: 'e', e: 'f',
//             f: 'g', g: 'h', h: 'i', i: 'j', j: 'j',
//             k: 'l', l: 'm', m: 'n', n: 'o', o: 'p',
//             p: 'q', q: 'r', r: 's', s: 't', t: 'u',
//             u: 'v', v: 'w', w: 'x', x: 'y', y: 'z',
//             z: 'a'
//     };

//     let shiftedWord = word.split('');
//     let test = "";
//     shiftedWord.forEach(element => {
//         test += lookup[element];
//     });;
//     return test;

// }


// ------ Refactored -----

function alphabeticShift(word: string){
    let lookup: object = {
            'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f',
            'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'j',
            'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p',
            'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u',
            'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z',
            'z': 'a'
    };

    let shiftedWord = word.toLowerCase().split('');
    return shiftedWord.map((element) => {return lookup[element]}).join('');

}


console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abc'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a string, return a string where every character is the next
         character in the english alphabet of the given string.
    b. What are the inputs that go in the problem?
        -a single string
    c. What are the outputs that should come from the problem?
        -a single string of equal length to the first string.
    d. Can the outputs be determined from the inputs?
        -Yes, no libraries needed.
    e. How should i label important pieces of data?
        -shiftedWord, shiftedLetter
2. Explore concrete examples.
    ('crazy') should return 'dsbaz'
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n)
    -made use of cascading methods
    -added .toLowerCase() to handle case where Captialized letters are used.
    -more meaningful variables

*/


