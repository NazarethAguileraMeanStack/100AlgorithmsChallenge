/*

Problem 53. Find Closest Pair

Given an array of integers numbers, we'd like to find the closest
pair of elements that add up to sum. Return the distance between
the closest pair (absolute difference between two indices). If there
isn't a pair, that adds up to sum, return -1.

*/

// ------ Original Way of Solving

// function findClosestPair(arr, sum) {

//     let sums = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === sum) {
//                 sums.push([i,j]);
//             }
//         }
//     }

//     if (sums.length === 0 ) {
//         return -1;
//     } else {
//         let test = [];
//         for (let i = 0; i < sums.length; i++) {
//             test.push(Math.abs(sums[i][0] - sums[i][1]))
//         }

//         return Math.min(...test);
//     }

// }

// ------ Refactored ------

function findClosestPair(arr: number[], sum: number): number {

    let obj = {}, sums  = [];

    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(Math.abs(arr[i] - sum))) {
            sums.push(Math.abs(i - obj[Math.abs(arr[i] - sum)]));
            obj[arr[i]] = i;
        } else {
            obj[arr[i]] = i;
        }
    }

    return (sums.length === 0) ? -1 : Math.min(...sums);

}


console.log(findClosestPair([1,0,2,4,3,0], 5));
console.log(findClosestPair([2,3,7], 8));
console.log(findClosestPair([2,3,7], 9999));
console.log(findClosestPair([2,3,7,2], 9));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array and a number, find the two numbers
         that add up to the given number and return the absolute 
         difference in their indexes. If there are no numbers that
         add up to the number given, return -1. If there are multiple
         combinations, return the smallest difference.
    b. What are the inputs that go in the problem?
        -an array of numbers, a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
2. Explore concrete examples.
    ([1,0,2,4,3,0], 5) returns 2
    (2,3,7) returns -1
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from Quadratic Time O(n^2) to Linear Time O(n)!!!
    -Added TypeScript Syntax
    -Eliminated nesting for-loops, and eliminated extra for-loop.
    -Made use of object.hasOwnPropety() method as a way of checking if sums were possible.
    -Made use of ternary operator.
    -Made use of spread operator.
    -Made code to account for cases where there are repeated numbers.

*/

