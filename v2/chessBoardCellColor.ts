/*

Problem 27.

Given two cells on a standard chess board, determine whether
they have the same color or not;

*/

// ------  Original Way of Solving ------

// function chessBoardCellColor(piece1, piece2) {
//     let board = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 , 'f': 6, 'g': 7, 'h': 8 };
//     let temp = board[piece1[0]];
//     let temp2 = board[piece2[0]];
//     return ((temp * parseInt(piece1[1]) % 2 === 0) === (temp2 * parseInt(piece2[1]) % 2 === 0) );
// }


// ------ Refactored ------

function chessBoardCellColor(piece1: any, piece2: any): boolean {
    let board = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 , 'f': 6, 'g': 7, 'h': 8 };

    let locationOne = (board[piece1[0]] * piece1[1]) % 2 === 0;
    let locationTwo = (board[piece2[0]] * piece2[1]) % 2 === 0;

    return locationOne === locationTwo;
}

console.log(chessBoardCellColor('a1', 'c3'));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given to locations on a chess board, are
         they matching colors?
    b. What are the inputs that go in the problem?
        -two strings referencing locations on a chess board.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, but a picture a Chess Board is helpful.
    e. How should i label important pieces of data?
        -piece1, piece2
2. Explore concrete examples.
    ('a1', 'c3') returns true;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time funciton
    -put the bulk of the work into the variable declaration instead of return
     for readibility.
    -removed parseInt because of dynamic type conversion when using multiplication.
    -added TypeScript Syntax.
*/

