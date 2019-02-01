/*

Problem 41.

Given a string, find the number of different characters in it.

*/


// ------ Original Way of Solving ------

// function differentSymbolsNaive(str) {

//     let obj = {};
//     let counter = 0;

//     for (let i = 0; i < str.length; i++){
//         if (obj.hasOwnProperty(str[i])) {
//             continue;
//         } else {
//             obj[str[i]] = 'check';
//             counter++;
//         }
//     }

//     return counter;

// }

// ------ Refactored ------

function differentSymbolsNaive(str: string): number {

    if (str.length <= 1) return str.length;
    let obj = { counter: 0};
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++){
        if (obj.hasOwnProperty(str[i])) {
            continue;
        } else {
            obj[str[i]] = 'check';
            obj.counter++;
        }
    }

    return obj.counter;

}


console.log(differentSymbolsNaive('cabca'));
console.log(differentSymbolsNaive('Nazareth'));
console.log(differentSymbolsNaive('Aguilera'));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -find the number of unique characters in a string.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -obj
2. Explore concrete examples.
    ('cabca') should return 3
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time
    -added TypeScript Syntax.
    -made it so capital and lowercase overlap.
    -put counter as a property of the object for one less declaration.
*/

