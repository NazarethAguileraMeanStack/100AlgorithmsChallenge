/*

Problem 20.

Given the positions of a white bishop and a black
pawn on the standard chess board, determine whether the bishop
can capture the pawn in one move.

The bishop has no restrictions in distance for each move,
but is limited to diagonal movement.

*/

// ------ Original Way of Solving ------
//***Couldn't figure out on my own. Original is Dylan's solution.

// function bishopAndPawn(bishop, pawn) {
    
//     let board = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//         f: 6,
//         g: 7,
//         h: 8
//     };

//     const bishopX = board[bishop[0]];
//     const bishopY = parseInt(bishop[1]);
//     const pawnX = board[pawn[0]];
//     const pawnY = parseInt(pawn[1]);

//     if (bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === pawnX + bishopY) {
//         return true;
//     }

//     return false;

// }


// ------ Refactored ------

function bishopAndPawn(bishop: string, pawn: string): boolean {
    let board = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    };

    return checkTopRight(bishop, pawn) ? true : checkTopLeft(bishop, pawn) ? true : checkBottomRight(bishop, pawn) ? true : checkBottomLeft(bishop, pawn) ? true : false;

    function checkTopRight(bishop, pawn) {
        let horizontal = +bishop[1];
        for (let i = board[bishop[0]]; i < 9; i++) {
            if (i === board[pawn[0]] && horizontal === +pawn[1]) {
                return true;
            }
            horizontal++;
        }
    }
    function checkTopLeft(bishop, pawn) {
        let horizontal = +bishop[1];
        for (let i = board[bishop[0]]; i > 0; i--) {
            if (i === board[pawn[0]] && horizontal === +pawn[1]) {
                return true;
            }
            horizontal++;
        }
    }
    function checkBottomRight(bishop, pawn) {
        let horizontal = +bishop[1];
        for (let i = board[bishop[0]]; i < 9; i++) {
            if (i === board[pawn[0]] && horizontal === +pawn[1]) {
                return true;
            }
            horizontal--;
        }
    }
    function checkBottomLeft(bishop, pawn) {
        let horizontal = +bishop[1];
        for (let i = board[bishop[0]]; i > 0; i--) {
            if (i === board[pawn[0]] && horizontal === +pawn[1]) {
                return true;
            }
            horizontal--;
        }
    }


}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('d4', 'c3'));
console.log(bishopAndPawn('d4', 'f4'));
console.log(bishopAndPawn('g1', 'b6'));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a bishop and a pawn on a standard
         chess board, can the bishop capture the
         pawn in one move?
    b. What are the inputs that go in the problem?
        -two strings, the locations of the bishop and pawn.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -A visual aid of a chess board is helpful.
    e. How should i label important pieces of data?
        -bishopLocation, pawnLocation
2. Explore concrete examples.
    ('a1', 'c3') returns true
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -O(n) time used
    -added helper functions to check all possible moves
    -made use of ternary operator

*/



