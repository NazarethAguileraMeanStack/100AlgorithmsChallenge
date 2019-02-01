/*

Problem 84. Reflect String

Define a string reflection as the result of applying the alphabet
reflection to each of its characters.

Reflect the given string.

*/

// ------- Original Way of Solving -------

// function reflectString(str) {

//     let alphabet = {
//         'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 
//         'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'
//     };

//     let reflectedWord = '';

//     for (let i = 0; i < str.length; i++) {
//         reflectedWord += alphabet[str[i]];
//     }
//     return reflectedWord;

// }

function reflectString(str: string): string {

    let alphabet = {
        'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q', 'k': 'p', 'l': 'o', 'm': 'n', 
        'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g', 'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'
    };

    return str.split('').map((element) => { return alphabet[element]}).join('');

}

console.log(reflectString('name'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, look at each letter, according the english alphabet,
         output the string with each letter's corresponding opposite.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, but you will need to know the english alphabet
    e. How should i label important pieces of data?
        -alphabet, reflectedString
2. Explore concrete examples.
    ('name') returns 'mznv'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -added TypeScript Syntax
    -made use of the .map method.
    -removed unnecessary variable declaration.

*/

