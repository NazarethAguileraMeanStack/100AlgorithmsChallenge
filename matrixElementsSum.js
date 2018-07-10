/*

74. Matrix Elements Sum

-After becoming famous, Codebots decided to move to a new building and live together. The building
is represented by a rectangular matrix, matrix of rooms, each cell containing an integer, the price 
of the room. Some rooms are free (cost is 0), but that's probably because they are haunted, so all the bots
are afraid of them. That is why any room that is free is located anywhere below a free room in the same column
is not condered suitable for the bots.

Help the bots calculate the total price of all rooms that are suitable for them.

EXAMPLE:

maxtrix = [[0,1,1,2],
          [0,5,0,0],
          [2,0,3,3]]


The output should be matrixElementsSum() = 9.

Here's the rooms matrix with unsuitable rooms marked x.

matrix = [[x,1,1,2],
          [x,5,x,x],
          [x,x,x,x]]

Thus the answer is 1 + 5 + 1 + 2 = 9.

*/

function matrixElementsSum(matrix){

    let badIndex = [];
    let prices = [];

    for(let i = 0; i < matrix.length; i++){

        for(let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == 0 || badIndex.includes(j)){
                badIndex.push(j);
                continue;
            } else {
                prices.push(matrix[i][j]);
            }
        }


    }

    return prices.reduce((total, element)=>{return total += element});



}

console.log(matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]]));
