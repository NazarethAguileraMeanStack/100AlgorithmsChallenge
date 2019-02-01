/*

86. Seats In Theaters

-Your friend advised you to see a new performance in the most popular theater.
The main problem is your shyness. To gain some courage, you decide to calculate and
see if you can make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater nRows and nCols, and the row and column
you are sitting in, return the number of people who sit behind you and in your column or to the left,
assuming all seats are occupied.

EXAMPLE:

nCols = 16, nRows = 11, col = 5, and row = 3, the output should be 96.

*/

function seatsInTheater(nCols, nRows, col, row){

    let colDiff = nCols - col + 1;
    let rowDiff = nRows - row;

    return colDiff * rowDiff;


}

console.log(seatsInTheater(16,11,5,3));