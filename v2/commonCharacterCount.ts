/*

Problem 30.

Given two strings, find the number of common characters between them.

*/

// ------ Original Way of Solving ------

// function commonCharacterCount(stringOne, stringTwo) {

//     let obj1 = {};
//     let obj2 = {};
//     let commonChars = 0;

//     for (let i = 0; i < stringOne.length; i++) {
//         if (obj1.hasOwnProperty(stringOne[i])) {
//             obj1[stringOne[i]]++;
//         } else {
//             obj1[stringOne[i]] = 1;
//         }
//     }

//     for (let i = 0; i < stringTwo.length; i++) {
//         if (obj2.hasOwnProperty(stringTwo[i])) {
//             obj2[stringTwo[i]]++;
//         } else {
//             obj2[stringTwo[i]] = 1;
//         }
//     }

//     for (let i = 0; i < stringOne.length; i++) {
//         if (obj1.hasOwnProperty(stringOne[i]) && obj2.hasOwnProperty(stringOne[i])) {
//             commonChars += Math.min(obj1[stringOne[i]], obj2[stringOne[i]]);
//             obj1[stringOne[i]] = 0;
//             obj2[stringOne[i]] = 0;
//         }
//     }

//     return commonChars;
// }

// ------ Refactored ------
function commonCharacterCount(stringOne: string, stringTwo: string): number {
    
    let obj1: object = {}, obj2: object = {}, commonChars: number = 0;

    for (let i = 0; i < stringOne.length; i++) {
        (obj1.hasOwnProperty(stringOne[i])) ? obj1[stringOne[i]]++ : obj1[stringOne[i]] = 1;
    }

    for (let i = 0; i < stringTwo.length; i++) {
        (obj2.hasOwnProperty(stringTwo[i])) ? obj2[stringTwo[i]]++ : obj2[stringTwo[i]] = 1;
    }

    for (let i = 0; i < stringOne.length; i++) {
        if (obj1.hasOwnProperty(stringOne[i]) && obj2.hasOwnProperty(stringOne[i])) {
            commonChars += Math.min(obj1[stringOne[i]], obj2[stringOne[i]]);
            delete obj1[stringOne[i]];
            delete obj2[stringOne[i]];
        }
    }

    return commonChars;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));
console.log(commonCharacterCount('Nazareth', 'Aguilera'));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given two strings, find the number of letters
         that both strings share. Account for repeated
         letters.
    b. What are the inputs that go in the problem?
        -Two strings.
    c. What are the outputs that should come from the problem?
        -A number.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -Obj1, Obj2, commonChars.
2. Explore concrete examples.
    ('aabcc', 'adcaa') returns 3.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -This should be O(3n) which is about O(n) linear time.
    -Added TypeScript Syntax.
    -Made use of delete keyword to prevent unnecessary checks once an item
     from an object has already been visited.
    -made use of ternary operator.
    -initialized all variables together.
*/

