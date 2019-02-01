/*

Problem 87. Seek and Destroy

You will be provided with an intial array (the first agrument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments

*/

// ------ Original Way of Solving ------

// function seekAndDestroy(initialArray, itemsToBeRemoved) {

//     let temp = [];

//     for (let i = 0; i < initialArray.length; i++) {
//         if (!itemsToBeRemoved.includes(initialArray[i])) {
//             temp.push(initialArray[i]);
//         }
//     }

//     return temp;
// }


// ------ Refactored -------

function seekAndDestroy(initialArray: number[], itemsToBeRemoved: number[]): number[] {

    let results: number[] = [], obj = {};

    for (let i = 0; i < itemsToBeRemoved.length; i++) {
        obj[itemsToBeRemoved[i]] = i;
    }

    for (let i = 0; i < initialArray.length; i++) {
        if (!obj.hasOwnProperty(initialArray[i])) {
            results.push(initialArray[i]);
        }
    }

    return results;
}

console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]));
console.log(seekAndDestroy([1,2,3,5,1,2,3],[2,3]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given two arrays, remove all elements from the first array
         that are in the second array.
    b. What are the inputs that go in the problem?
        -two number arrays
    c. What are the outputs that should come from the problem?
        -an array of numbers
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -initialArray, itemsToBeRemoved, temp
2. Explore concrete examples.
    ([3,5,1,2,2],[2,3,5]) returns [1]
    ([1,2,3,5,1,2,3][2,3]) returns [1,5,1]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved Time Complexity from O(n^2) Quadratic Time to O(n) Linear Time.
    -made use of more descriptive variable name.
    -used object.hasOwnProperty method instead of .includes() to check validation.
    -added TypeScript Syntax.


*/


