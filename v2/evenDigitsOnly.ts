/*

Problem 46. Even Digits Only

Check if all digits of the given integer are even.

*/

// ------ Original Way of Solving ------

// function evenDigitsOnly(num) {

//     let numArray = num.toString().split('');

//     for (let i = 0; i < numArray.length; i++) {
//         if (+numArray[i] % 2 !== 0) {
//             return false;
//         }
//     }

//     return true;

// }

// ------ Refactored ------

function evenDigitsOnly(num: number): boolean {
    return num.toString().split('').filter((element) => {return +element % 2 !== 0}).length === 0;
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
console.log(evenDigitsOnly(1234567890));
console.log(evenDigitsOnly(2468));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number, check if every digit in that number
         is an even number.
    b. What are the inputs that go in the problem?
        -A number
    c. What are the outputs that should come from the problem?
        -A boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -isEven, numArray
2. Explore concrete examples.
    (248622) returns true.
    (642386) returns false
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -removed unnecessary variable declaration.
    -made use of cascading methods.
    -made use of .filter() method.
    -added typescript syntax.
    -1 line of code!
*/

