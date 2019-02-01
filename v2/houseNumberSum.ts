/*

Problem 60. House Number Sum

A boy is walking a long way to his home. To make the walk more fun
he decides to add up all the numbers of the houses that he passes by
during his walk. Unfortunately, not all of the houses have numbers written
on them, and on top of that the boy is regularly taking turns to change streets,
so the numbers don't appear in any particular order.

At some point during the alk, the boy encounters a house with number 0 written on
it, which surprises him so much that he stops adding numbers to his total right after
seeing that house.

For the given sequence of houses, determine the sum that the boy will get. It is
guranteed that ther will always be at least one 0 house on the path.

*/


// ------ Original Way of Solving ------

// function houseNumberSum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] === 0) {
//             break;
//         }
//     }

//     return sum;
// }


// ------ Refactored ------

function houseNumberSum(arr: number[]): number {
    let sum: number = 0, counter = 0;

    add(arr);
    return sum;

    function add(arr) {
        if (arr[counter] === 0) return 0;
        sum += arr[counter];
        counter++;
        return add(arr);
    }
}

console.log(houseNumberSum([5,1,2,3,0,1,5,0,2]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, find the sum up until
         we find the first 0 in the array. return the sum
         before a 0 was hit.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -sum
2. Explore concrete examples.
    ([5,1,2,3,0,1,5,0,2]) returns 11.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) time
    -eliminated for-loop
    -made use of recursive helper function.
    -added TypeScript Syntax.

*/

