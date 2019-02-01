/*

Problem 74. Matrix Elements Sum

After becoming famous, CodeBots decided to move to a new building and
live together. The building is represented by a rectangular matrix of rooms,
each cell containing an integer - the price of the rom. Some rooms are free
(their cost is 0), but that's probably because they are haunted, so all the bots
are afraid of them. That is why any room that is free of located anywhere below
a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable
for them.

*/


// ------ Original Way of Solving ------

// function matrixElementsSum(arr) {

//     let marked = {};
//     let sum = 0;
//     for (let k = 0; k < arr.length; k++) {
//         for (let i = 0; i < arr[k].length; i++) {
//             if (arr[k][i] === 0) {
//                 marked[i] = arr[i]; 
//             }
//             if (!marked.hasOwnProperty(arr[k][i])) {
//                 sum += arr[k][i];
//             }
//         }
//     }

//     return sum;

// }

// ------- Refactored --------

function matrixElementsSum(arr: number[][]): number {

    let marked = {}, sum: number = 0;
    
    arr.forEach((element) => { 
        for (let i = 0; i < element.length; i++) {
            if (element[i] === 0) marked[i] = arr[i];
            if (!marked.hasOwnProperty(element[i])) sum += element[i];
        }
    });

    return sum;

}

console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a multidimensional array, find the sum of the values
         however, if an index is marked, do not add the marked index
         on any subsequent array.
    b. What are the inputs that go in the problem?
        -a multidimensional array of numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed
    e. How should i label important pieces of data?
        marked, sum
2. Explore concrete examples.
    ([[0,1,1,2],[0,5,0,0],[2,0,3,3]]) returns 9.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n^2) quadratic time.
    -added TypeScript Syntax.
    -changed outer for-loop to forEach for readability.
    -took advantage of one line if-statement

*/

