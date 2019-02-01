/*

Problem 18

Given an array of integers, replace all the occurences of elemToReplace
with substitutionElem

*/




// ------ Original Way of Solving -----

// function arrayReplace(arr, targetElement, newElement) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === targetElement) {
//             arr[i] = newElement;
//         }
//     }

//     return arr;
// }



// ------ Refactored ------ 

function arrayReplace(arr: number[], targetElement: number, newElement: number) {

    arr.forEach((currentValue, index, actualArray) => { 
        actualArray[index] === targetElement ? actualArray[index] = newElement : actualArray[index] = currentValue; 
    });

    return arr;
}

console.log(arrayReplace([1,2,1, 8, 1], 1, 3));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Iterate through array and replace all occurences
         of a given number, with another given number.
    b. What are the inputs that go in the problem?
        -an array, elementToReplace, elementToReplaceWith
    c. What are the outputs that should come from the problem?
        -Return an array of numbers
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed
    e. How should i label important pieces of data?
        -oldElement, newElement
2. Explore concrete examples.
    ([1,2,1], 1, 3) returns [3,2,3]
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n) time.
    -Made use of the the .forEach Method
    -made use of ternary operator
    -added TypeScript syntax.
*/

