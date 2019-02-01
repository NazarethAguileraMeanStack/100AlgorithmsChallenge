/*

Problem 15.

Given array of Integers, find the maximal possible sum of its k
consecutive elements.

*/


// ------ Original Way of Solving ------

// function arrayMaxConsecutiveSum(arr, sizeOfElements){
//     //use a for loop to find the first possible sum.
//     let maxSum = 0;

//     for (let i = 0; i < sizeOfElements; i++){
//         maxSum += arr[i];
//     }

//     let tempSum = maxSum;

//     for (let i = 1; i < arr.length - 1; i++){
//         tempSum = tempSum - arr[i - 1] + arr[i + 1];
//         maxSum = Math.max(maxSum, tempSum);
//     }

//     return maxSum;
// }

// ------ Refactored -------

function arrayMaxConsecutiveSum(arr: number[], sizeOfElements: number): number {
    
    if (sizeOfElements > arr.length) return null;
    
    let maxSum: number = 0;

    for (let i = 0; i < sizeOfElements; i++){
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    for (let i = 1; i < arr.length - 1; i++){
        tempSum = tempSum - arr[i - 1] + arr[i + 1];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 2));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a number, find the group of consecutive numbers
         that would give you the largest sum. The size of the
         group of numbers is the given number.
    b. What are the inputs that go in the problem?
        -an array of numbers, and a number showing the size of the grouping
    c. What are the outputs that should come from the problem?
        -a single num
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -sizeOfElements, max, temp
2. Explore concrete examples.
    ([2,3,5,1,6], 2) returns 8.
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -Kept O(n) time
    -added an edge case where if the inital array is too small, then it returns null.
    -added TypeScript syntax.

*/

