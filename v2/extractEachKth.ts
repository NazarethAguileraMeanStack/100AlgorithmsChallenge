/*

Problem 47. Extract each Kth

Given an array of integers, remove each kth element from it.

*/


// ------ Original Way of Solving -------

// function removeEachKth(arr, k) {

//     let newArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         if ((i + 1) % k !== 0) {
//             newArray.push(arr[i]);
//         }
//     }

//     return newArray;

// }

// ------ Refactored ------

function removeEachKth(arr: number[], k: number): number[] {

    return arr.filter((element, index) => { return (index  + 1 ) % k !== 0});

}


console.log(removeEachKth([1,2,3,4,5,6,7,8,9,10], 3));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array and a number, remove each item in the array
         that has an index (1-based) that is a multiple of a number,
         k.
    b. What are the inputs that go in the problem?
        -an array of numbers and a number.
    c. What are the outputs that should come from the problem?
        -An array of numbers.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -arr, k
2. Explore concrete examples.
    ([1,2,3,4,5,6,7,8,9,10], 3) returns [1,2,4,5,7,8,10]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -removed unnecessary variable declaration.
    -made use of .filter() method.
    -added TypeScript syntax.
    -One line of code!
*/

