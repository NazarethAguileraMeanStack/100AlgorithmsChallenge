/*
39. Crossing Sum

-Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix.
Return sum of all elements of the union.

EXAMPLE:

Maxtrix[[1,1,1,1],[2,2,2,2],[3,3,3,3]] a =1 and b = 3.
output should be (2+2+2+2) + (1 + 3) = 12.


*/


function crossingSum(matrix, row, column){

    let rowSum = 0;
    for(let i = 0; i < matrix[row].length; i++){
        rowSum += matrix[row][i];
    }

    let columnSum = 0;
    for(let i = 0; i < matrix.length; i++){
        columnSum += matrix[i][column]
    }

    return columnSum + rowSum - matrix[row][column];

}


console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1, 3));
console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 0, 1));
console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 2, 2));
console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 2, 1));