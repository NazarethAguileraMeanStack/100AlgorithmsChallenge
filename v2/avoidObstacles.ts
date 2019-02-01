/*

Problem 19.

Assume that you are jumping from the point with coordinate 0
to the right. You are allowed only to make jumps of the same
length represented by some integer.

Find the minimal length of the jump enough to avoid all obstacles.

*/


// ------ Original Way of Solving ------

// function avoidObstacles(arr) {

//     arr.sort();
//     let biggestValue = arr[arr.length - 1];
//     let i = 1;
//     let j = 2;
//     let counter = 0;
//     while (j !== biggestValue + 1) {
//         if (arr[i] % j === 0) {
//             j++;
//             i = 0;
//         } else {
//             counter++;
//             if (counter === arr.length) {
//                 break;
//             }
//         }
//         i++;
//     }
//     return j;
// }


// ------ Refactored ------

function avoidObstacles(arr: number[]): number {

    let minJump: number = 2;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % minJump === 0) {
            minJump++;
            i = 0;
        }
    }
    return minJump;
}


console.log(avoidObstacles([5,3,6,7,9]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Iterate through an array and find the smallest
         number possible that if incremented would not
         equal the value of any number in the array.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a single number
    d. Can the outputs be determined from the inputs?
        -a visual diagram provided is not needed but helpful
    e. How should i label important pieces of data?
        -minJump
2. Explore concrete examples.
    ([5,3,6,7,9]) returns 4
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -Unsure of time complexity since loop resets on failed check.
    -Eliminated unnecessary variables.
    -Elminated unnecessary sort
    -more meaningful variable names
    -changed from while to for loop
    -added TypeScript Syntax

*/

