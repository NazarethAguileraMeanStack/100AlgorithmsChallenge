/*

Problem 86. Seats In Theaters

Your friend advised you to see a new performance in the most popular theater.
The main problem is your shyness. To gain some courage, you decide to calculate and
see if you can make it to the exit without disturbing too many people.
Given the total number of rows and columns in the theater nRows and nCols, and the row and column
you are sitting in, return the number of people who sit behind you and in your column or to the left,
assuming all seats are occupied.
EXAMPLE:

*/


// ------ Original Way of Solving -------

// function seatsInTheater(nCols, nRows, col, row){

//     let colDiff = nCols - col + 1;
//     let rowDiff = nRows - row;

//     return colDiff * rowDiff;


// }

// ------ Refactored ------

function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {

    return ((nCols - col) + 1) * (nRows - row);

}

console.log(seatsInTheater(16,11,5,3));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a matrix, determine how many values are behind a given position,
         and the number of values below that position, including the inital position.
    b. What are the inputs that go in the problem?
        -4 numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -You should have a visual aid for this one
    e. How should i label important pieces of data?
        -
2. Explore concrete examples.
    nCols = 16, nRows = 11, col = 5, and row = 3, the output should be 96.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -****I couldn't figure this one out on my own, so I used Dylan's example for orginal way.
    -Kept O(1) constant time.
    -added TypeScript Syntax.
    -Removed unnecessary variable declaration.
    -One line of code.

*/

