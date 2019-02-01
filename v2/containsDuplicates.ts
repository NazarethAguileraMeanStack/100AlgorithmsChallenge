/*

Problem 36.

Given an array of integers, write a function the determines whether
the array contains any duplicates. Your function should return true
if any element appears at least twice in the array and should
return false if every element is distinct.

*/

// ------ Original Way of Solving ------
// function containsDuplicates(arr) {
//     let obj = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (obj.hasOwnProperty(arr[i])) {
//             return true;
//         } else {
//             obj[arr[i]] = arr[i];
//         }
//     }
//     return false;
// }

// ------ Refactored ------

function containsDuplicates(arr: number[]): boolean {
    
    if (arr.length <= 1) return false;
    
    let obj: object = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            return true;
        } else {
            obj[arr[i]] = arr[i];
        }
    }
    return false;
}

console.log(containsDuplicates([1,2,3,1]));
console.log(containsDuplicates([3,1]));
console.log(containsDuplicates([1,2,3,4,5,6,7,2]))

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, return true if the array
         has any duplicates and false if it does not.
    b. What are the inputs that go in the problem?
        -an array of integers.
    c. What are the outputs that should come from the problem?
        -a Boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra sources needed.
    e. How should i label important pieces of data?
        -obj
2. Explore concrete examples.
    ([1,2,3,1]) returns true
    ([3,1]) returns false
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time.
    -added an edge case where the array.length is less than or equal to one,
     no need to check as duplicates are not possible.
    -added TypeScript Syntax.
*/

