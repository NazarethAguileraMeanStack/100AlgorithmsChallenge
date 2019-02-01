/*
Problem 13.

You are given an array of integers. On each move, you are allowed to increase
exactly one of its elements by one. Find the minimal number of moves required
to obtain a strictly increasing sequence from the input.

*/


// ------ Original way of solving ------

// function arrayChange(arr){
//     let counter = 0;
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] <= arr[i - 1]){
//             let temp = (arr[i -1] + 1) - arr[i];
//             counter += temp;
//             arr[i] = arr[i - 1] + 1;
//         }
//     }
//     return counter;
// }


// ------ Refactored ------

function arrayChange(arr: number[]): number {

    let turnsNeeded: number = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] <= arr[i - 1]){
            turnsNeeded += (arr[i -1] + 1) - arr[i];
            arr[i] = arr[i - 1] + 1;
        }
    }
    return turnsNeeded;
}

console.log(arrayChange([1,1,1]));
console.log(arrayChange([1,2,2]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -You can increase the value of a number in an array by one
         each turn. How many turns would you need to have a sequence 
         of strictly increasing numbers?
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no further libraries needed.
    e. How should i label important pieces of data?
        -turnsNeeded
2. Explore concrete examples.
    ([1,1,1]) returns 3
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n) time
    -removed unecessary temp variable
    -more meaningful variable name
    -added TypeScript syntax

*/

