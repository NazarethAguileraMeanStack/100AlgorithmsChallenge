/*

48. Extract Matrix Column

-Given a rectangular matrix and an integer column, return an array containing the elements of the column of the given
matrix.

EXAMPLE:

matrix[[1,1,1,2],[0,5,0,4],[2,1,3,6]] and column = 2; output should be [1,0,3]

*/


function extractMatrixColumn(matrix, column){
    let columnsArray = [];

    for(let i = 0; i < matrix.length; i++){
        columnsArray.push(matrix[i][column]);
    }

    return columnsArray;
}

console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 0));
console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 1));
console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));
console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 3));