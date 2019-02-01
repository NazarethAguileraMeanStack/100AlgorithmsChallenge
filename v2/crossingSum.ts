/*

Problem 39.

Given a rectangular matrix and integer a and b, consider the union
of the ath and the bth (both 0-based) column of the matrix. (ie cells
that belong either to the ath row or the bth row). Return sum of all
elements of that union.

*/

// ------ Original Way of Solving ------

// function crossingSum(arr, row , column) {

//     let correctValues = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (j === column && i !== row) {
//                 correctValues.push(arr[i][j])
//             }
//             if (i === row){
//                 correctValues.push(arr[i][j])
//             }
//         }
//     }

//     let sum = correctValues.reduce((total, element) => { return total += element });

//     return sum;

// }


// ------ Refactored ------
function crossingSum(arr: number[][], row: number , column: number): number {

    let sum: number = 0;

    for (let checkRow = 0; checkRow < arr.length; checkRow++) {
        for (let checkColumn = 0; checkColumn < arr[checkRow].length; checkColumn++) {
            if (checkColumn === column && checkRow !== row) {
                sum += arr[checkRow][checkColumn];
            }
            if (checkRow === row){
                sum += arr[checkRow][checkColumn];
            }
        }
    }

    return sum;

}


console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a multidimensional array which represents
         a grid of rows and columns, given a row and b column,
         find the sum of all elements in the row and column.
        -Do not count the centerpoint twice.
    b. What are the inputs that go in the problem?
        -a multidimensional array, a number representing a row,
         and a number representing a column.
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -yes, no extra resouces needed.
    e. How should i label important pieces of data?
        -sum, row, column
2. Explore concrete examples.
    ([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3) returns 12.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time.
    -removed unnecessary array, changed to sum.
    -removed unnecessary array Method.reduce.
    -made more descriptive variable names.
    -added TypeScript Syntax;

*/

