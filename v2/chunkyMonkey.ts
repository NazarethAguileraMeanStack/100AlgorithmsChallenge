/*

Problem 28.

Write a function that splits an array (first argument)into
groups the length the size of the second argument and returns
them as a two-dimensional array.

*/


// ------ Original Way of Solving ------

// function chunkyMonkey(arr, size) {

//     let bigArray = [];
//     let smallArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallArray.length !== size) {
//             smallArray.push(arr[i]);
//             if (smallArray.length === size) {
//                 bigArray.push(smallArray);
//                 smallArray = [];
//             }
//         }
//     }
//     if (smallArray.length > 0) {
//         bigArray.push(smallArray);
//     }
//     return bigArray;
// }

// ------ Refactored ------

function chunkyMonkey(arr: any, size: number) {

    let bigArray = [];

    while (arr.length > 0) {
        bigArray.push(arr.splice(0, size));
    }

    return bigArray;
}


console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));
console.log(chunkyMonkey([0,1,2,3,4,5], 4));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number and an array, split the arr
         into a collection of subarrays the size of the 
         number given. Then return the arrays as a
         two-dimentional array.
    b. What are the inputs that go in the problem?
        -1 array, and 1 number
    c. What are the outputs that should come from the problem?
        -a two dimensional array.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -bigArray, subArray, counter
2. Explore concrete examples.
    (['a', 'b', 'c', 'd'], 2) returns [['a', 'b'],['c', 'd']]
    ([0,1,2,3,4,5], 4) returns [[0,1,2,4],[4,5]]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -I believe this is O(n) linear time.
    -Made use of splice method.
    -removed if statements and unnecessary smallerArray;
    -changed from for-loop to while-loop.

*/

