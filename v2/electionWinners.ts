/*

Problem 44. Election Winners

-Elections are in Progress!
-Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who 
hasn't cast their vote yet, find the number of candidates who still have a chance of winning the election.
-The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the 
same (maximum) number of votes, assume there is no winner at all.

*/

// ------ Original Way of Solving ------

// function electionWinners(arr, possibleVotes) {

//     let candidates = {};
//     let possibleWinners = [];
//     let maxValue = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         maxValue = Math.max(maxValue, arr[i]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + possibleVotes > maxValue) {
//             if (candidates.hasOwnProperty(arr[i])) {
//                 return 'no winners';
//             } else {
//                 candidates[arr[i]] = arr[i];
//                 possibleWinners.push(arr[i]);
//             }
//         }
//     }

//     return possibleWinners.length;

// }

// ------ Refactored ------

function electionWinners(arr: number[], possibleVotes: number): any {

    let candidates: object = {}, maxValue: number = Math.max(...arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + possibleVotes > maxValue) {
            if (candidates.hasOwnProperty(arr[i])) {
                return 'no winners';
            } else {
                candidates[arr[i]] = arr[i];
            }
        }
    }

    return Object.keys(candidates).length;

}

console.log(electionWinners([2,3,5,2], 3));
console.log(electionWinners([2,5,5,1], 3));
console.log(electionWinners([1,2,3,4], 3));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of number, find the number
         that can be outright higher than all other values
         in the array, if they receive the rest of the
         possibleVotes. Return the index of that number.
         If two numbers are equal, return null;
    b. What are the inputs that go in the problem?
    c. What are the outputs that should come from the problem?
    d. Can the outputs be determined from the inputs?
    e. How should i label important pieces of data?
2. Explore concrete examples.
    votes = [2,3,5,2] and k = 3, the output should be 2.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time
    -instead of pushing to an array, i counted the keys in the object.
    -made use of the spread operator to find max value, eliminating need for loop.
    -cleaned up variable declaration.
    -added TypeScript Syntax.

*/

