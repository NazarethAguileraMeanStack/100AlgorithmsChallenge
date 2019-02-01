/*

Problem 48. Extract each matrix column

Given a rectangular matrix and integer column, return an array
containing the elements of the columth column of the given matrix
(the leftmost column is the 0th one).

*/


// ------ Original Way of Solving ------

// function extractMatrixColumn(arr, column) {
    
//     let returnedValues = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (j === column) {
//                 returnedValues.push(arr[i][j]);
//             }
//         }
//     }

//     return returnedValues;
// }

// ------ Refactored -------

function extractMatrixColumn(arr: number[][], column: number): number[] {
    
    let returnedValues: number[] = [];
    
    for (let row of arr) {
        returnedValues.push(row[column])
    }

    return returnedValues;
}

console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a multidimensional array which represents
         a grid, return the values located in a given column.
    b. What are the inputs that go in the problem?
        -a multidimensional array and a number
    c. What are the outputs that should come from the problem?
        -an array
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -arr, column
2. Explore concrete examples.
    ([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2) returns [1,0,3]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -improved from O(n^2) quadratic time to O(n) linear time.
    -added TypeScript Syntax.
    -changed from two for loops to a single for-of loop.

*/

