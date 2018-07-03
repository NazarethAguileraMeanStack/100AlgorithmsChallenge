/*
27. Chess Board Cell Color

-Given two cells on the standard chess board, determine whether they have the same color or not.

EXAMPLE:
cell1 = "A1", and cell2 = "C3", the output should be true.

*/

function chessBoardCellColor(cell1, cell2){
    let board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
        };

        let part1Cell1 = board[cell1[0]];
        let part2Cell1 = parseInt(cell1[1]);
        let part1Cell2 = board[cell2[0]];
        let part2Cell2 = parseInt(cell2[1]);

        if (((part1Cell1 + part2Cell1) % 2 == 0) === ((part1Cell2 + part2Cell2) % 2 == 0)){
            return true;
        } else {
            return false;
        }

}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A2", "D1"));
console.log(chessBoardCellColor("C5", "H8"));
console.log(chessBoardCellColor("A1", "B1"));