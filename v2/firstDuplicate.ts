/*

Problem 56. First Duplicate

Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurence has the minimal
index. In other words, if there are more than 1 duplicated numbers, return the
number for which the second occurence has a smaller index than the second occurence
of the other number does. If there are no such elements, return -1.

*/

// ------ Original Way of Solving ------

// function firstDuplicate(arr) {

//     let duplicates = {};
//     let minDifference = arr.length;

//     for (let i = 0; i < arr.length; i++) {
//         if (duplicates.hasOwnProperty(arr[i])) {
//             if ( Math.abs(duplicates[arr[i]] - i) < minDifference) {
//                 minDifference = Math.min(Math.abs(duplicates[arr[i]] - i), minDifference);
//                 duplicates['smallestValue'] = arr[i];
//             }
//         } else {
//             duplicates[arr[i]] = i;
//         }
//     }

//     return duplicates['smallestValue'] || -1;
// }

// ------ Refactored -------

function firstDuplicate(arr: number[]) {

    let duplicates = {}, i: number = 0;

    while (!duplicates.hasOwnProperty(arr[i])) {
        duplicates[arr[i]] = i;
        i++;
    }
    return arr[i] || -1;
}
console.log(firstDuplicate([2,1,3,5,3,2]));
console.log(firstDuplicate([2,4,3,5,1]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given an array of number, find the first number that is
         repeated. If there are more than one repeated numbers, find the
         one with the smallest index. else, return -1.
    b. What are the inputs that go in the problem?
        -an array of numbers.
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -duplicates, arr
2. Explore concrete examples.
    -([2,1,3,5,3,2]) returns 3
    -([2,4,3,5,1]) returns -1
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -Removed unnecessary variable declarations.
    -simplified logic from for-loop to while loop.
    -added TypeScript syntax.

*/

