/*

Problem 35.

Given an array of integers and an integer k, determine whether
there are two distinct indices i and j, in the array where 
nums[i] === nums[j] and the absolute difference between i and j
is less than or equal to k.

*/

// ------ Original Way of Solving ------

// function containsCloseNums(arr, difference) {

//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (obj.hasOwnProperty(arr[i])) {
//             obj[arr[i]] = obj[arr[i]] - i;
//         } else {
//             obj[arr[i]]= i;
//         }
//     }

//     for (let i = 0; i < arr.length; i++){
//         if (obj[arr[i]] < 0) {
//             return Math.abs(obj[arr[i]]) <= difference;
//         }      
//     }

// }

// ------ Refactored -------

function containsCloseNums(arr, difference) {

    let obj: object = {}, repeat: number = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            repeat = obj[arr[i]] - i;
            break;
        } else{
            obj[arr[i]] = i;
        }  
    } 

    return Math.abs(repeat) <= difference;

}

console.log(containsCloseNums([0,1,2,3,5,2], 3));
console.log(containsCloseNums([0,1,2,3,5,2], 2));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array, determine if the ranges of indexes of a
         repeated number smaller than or equal to a given number.
    b. What are the inputs that go in the problem?
        -an array and an integer.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -absDifference
2. Explore concrete examples.
    (containsCloseNums([0,1,2,3,5,2], 3) returns true;
    (containsCloseNums([0,1,2,3,5,2], 2) returns false;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time;
    -added break out early if we find our repeat,
     no need to keep casting more to the object.
    -eliminated need for second loop by keeping track
     of the repeated arr value.

*/

