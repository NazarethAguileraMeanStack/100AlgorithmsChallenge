/*

Problem 16.

Given an array of integers, find the maximal absolute difference
between any two of its adjacent elements.

*/


// ------ Original Way of Solving

// function arrayMaximalAdjacentDifference(arr){

//     let maxDifference = Math.abs(arr[0] - arr[1]);
//     let temp = maxDifference;

//     for (let i = 1; i < arr.length - 1; i++){
//         temp = Math.abs(temp - arr[i - 1] + arr[i + 1]);
//         maxDifference = Math.max(maxDifference, temp);
//     }
//     return maxDifference;
// }

// ------ Refactored ------

function arrayMaximalAdjacentDifference(arr: number[]): number {

    if (arr.length == 2) return Math.abs(arr[0] - arr[1]);

    let maxDifference: number = Math.abs(arr[0] - arr[1]);

    for (let i = 1; i < arr.length; i++){
        maxDifference = Math.max(maxDifference, Math.abs(arr[i - 1] - arr[i]));
    }

    return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 0, 1]));
console.log(arrayMaximalAdjacentDifference([2, 8, 0, -2]));
console.log(arrayMaximalAdjacentDifference([2, 5, 7, 9]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of number, find the two adjacent
         numbers with the largest difference in terms of
         absolute value.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a single number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -temp, max
2. Explore concrete examples.
    ([2,4,1,0]) returns 3
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -Kept O(n) time
    -removed unnecessary variable ** could add for clarity.
    -added edge case if the arr only has two numbers
    -added TypeScript syntax.
    -corrected logic.
*/

