/*

Problem 33.

Given a sorted integer array that does not contain duplicates,
return a summary of the number ranges it contains.

*/


// ------ Original Way of Solving ------
// function composeRanges(arr) {

//     let ranges = [];
//     let subArray = [];

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 === arr[i + 1]) {
//             subArray.push(arr[i]);
//         } else {
//             subArray.push(arr[i])
//             ranges.push(subArray);
//             subArray = [];
//         }
//     }

//     let finalArray = [];
//     for (let i = 0; i < ranges.length; i++) {
//         if (ranges[i].length > 1) {
//             finalArray.push(ranges[i][0] + ' -> ' + ranges[i][ranges[i].length - 1]);
//         } else {
//             finalArray.push(ranges[i][0].toString());
//         }
//     }
    
//     return finalArray;
        
// }


// ------ Refactored ------

function composeRanges(arr: number[]): string[] {

    let ranges: any[] = [], subRanges: number[] = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1]) {
            subRanges.push(arr[i]);
        } else {
            subRanges.push(arr[i]);
            ranges.push(subRanges);
            subRanges = [];
        }
    }

    for (let i = 0; i < ranges.length; i++) {
        let start: number = ranges[i][0], end: number = ranges[i][ranges[i].length - 1];
        ranges[i] = (ranges[i].length > 1) ? `${start} -> ${end}` : `${start}`;
    }
    
    return ranges;
        
}

console.log(composeRanges([-1,0,1,2,6,7,9]));
console.log(composeRanges([0,1,2,3,5,6,7,8,10,12,14,15,16,17,18,20]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a sorted array of numbers, return ranges of consecutive numbers.
    b. What are the inputs that go in the problem?
        -an array of sorted numbers.
    c. What are the outputs that should come from the problem?
        -an array of strings representing the ranges.
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -bigArray, subArray
2. Explore concrete examples.
    ([-1,0,1,2,6,7,9]) returns ['-1 -> 2', '6 -> 7', '9']
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time.
    -Took advantage of template literals.
    -changes ranges array in place to remove finalArray.
    -Made use of ternary operator.
    -Put bulk of logic into start and end variables, instead of returning expressions.
    -added TypeScript Syntax.
*/



