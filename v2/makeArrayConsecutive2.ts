/*

Problem 73. Make Array Consecutive 2

Ratiorg got statues of different sizes as a present from CodeMaster
for his birthday, each statue having a non-negative integer size. Since
he likes to make things perfect, he wants to arrange them from smallest to largest
so that each statue will be bigger than the previous one by exactly 1. He may need
some additional statues to be able to accomplish that. Help him figure out the
minimum number of additional statues needed.

*/


// ------ Original Way of Solving ------

// function makeArrayConsecutive2(arr) {

//     let numbersNeeded = [];
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         min = Math.min(min, arr[i]);
//         max = Math.max(max, arr[i]);
//     }
    
//     for (let i = min; i < max; i++) {
//         if (!arr.includes(i)) {
//             numbersNeeded.push(i);
//         }
//     }

//     return numbersNeeded.length;

// }

// ------ Refactored ------

function makeArrayConsecutive2(arr: number[]): number {

    let numbersNeeded: number = 0, max: number, min: number, numbers = {};
    min = max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
        numbers[arr[i]] = i;
    }
    
    for (let i = min; i < max; i++) {
        if (!numbers.hasOwnProperty(i)) numbersNeeded++;
    }

    return numbersNeeded;

}

console.log(makeArrayConsecutive2([6,2,3,8]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a sequence of numbers, determine how many numbers are missing
         from the sequence that would make it strictly increasing by 1.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, No extra resources needed.
    e. How should i label important pieces of data?
        -arr, numbersNeeded
2. Explore concrete examples.
    ([6,2,3,8]) returns 3;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -IMPROVED! From O(n^2) quadratic time to O(n) linear time.
        ***The .includes(), linear time, nested in the for-loop creates a quadratic time.
        ***By Using an object, and the .hasOwnProperty, constant time, we improve to linear time!
        ***By changing the numberNeeded variable from an array to a number, we also improve from
        ***linear space to constant space as it does not grow increasingly on the numbers missing!!
    
    -Added TypeScript Syntax.
    -Made use of multiple variable declarations on one line.

*/

