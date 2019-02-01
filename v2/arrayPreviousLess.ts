/*
Problem 17.

Given an array of integers, for each position i, search among the previous positions
for the last (from the left) position that contains a smaller value. Store this value
at position i in the answer. If no such value can be found, store -1 instead.

*/


// ------ Original Way of Solving Problem ------

// function arrayPreviousLess(arr){
//     let temp = -1;
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < i; j++){
//             if (arr[j] < arr[i]){
//                 temp = arr[j];
//             }
//         }
//         newArray.push(temp);
//         temp = -1;
//     }
//     return newArray;;
// }


// ------ Refactored ------

function arrayPreviousLess(arr: number[]){
    let temp: number = -1;
    let newArray: number[] = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            temp = (arr[j] < arr[i]) ? arr[j] :  -1;
        }
        newArray.push(temp);
    }
    return newArray;
}

console.log(arrayPreviousLess([3,5,2,4,5]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given an array of numbers, looking at the current index,
         find a number at an earlier index, as close to the index as
         possible, and replace the current index with that smaller value.
        -if there is no such number, replace the current index with -1. 
    b. What are the inputs that go in the problem?
        -a number array
    c. What are the outputs that should come from the problem?
        -a number array with modified values from the first array.
    d. Can the outputs be determined from the inputs?
        -yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -prevNumber, smallNumber, index
2. Explore concrete examples.
    -([3,5,2,4,5]) returns [-1,3,-1,2,4];
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n^2); couldn't figure a way to refactor into faster time complexity.
    -made use of ternary operator.
    -added TypeScript syntax.
*/
