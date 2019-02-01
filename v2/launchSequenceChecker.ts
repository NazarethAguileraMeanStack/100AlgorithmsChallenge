/*

Problem 71. Launch Sequence Checker

The master launch sequence consists of serveral independent sequences for different systems.
Your goal is to verify that all the individual system sequences are in strictly increasing order.
In other words, any two elements i and (i < j) of the master launch sequence that belong to the same system,
their values should be in strictly increasing order.

*/

// ------ Original Way of Solving ------

// function launchSequenceChecker(systemNames, stepNumbers) {

//     let launchPattern = {};

//     for (let i = 0; i < systemNames.length; i++) {
//         if (launchPattern.hasOwnProperty(systemNames[i])) {
//             if (launchPattern[systemNames[i]] > stepNumbers[i]) {
//                 return false;
//             }
//         } else {
//             launchPattern[systemNames[i]] = stepNumbers[i];
//         }
//     }

//     return true;

// }

// ------ Refactored -------

function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {

    let launchPattern = {};

    for (let i = 0; i < systemNames.length; i++) {
        if (launchPattern.hasOwnProperty(systemNames[i])) {
            if (launchPattern[systemNames[i]] > stepNumbers[i]) return false;
        } else {
            launchPattern[systemNames[i]] = stepNumbers[i];
        }
    }

    return true;

}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1,10,11,2,12,111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2,1,12,111]));





/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -push every stepNumber in a substring grouped with its named instances,
         and return if each substring is in ascending order.
    b. What are the inputs that go in the problem?
        -an array of strings, an array of numbers.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -subString, function isInOrder(), temp
2. Explore concrete examples.
    systemNames = ["stage_1", "stage_2", "dragon", "stage_1,", "stage_2", "dragon"] and stepNumbers = [1,10,11,2,12,111], output should be true.
    There are three independent sequences for systems "stage_1", "stage_2", and "dragon. these sequences are [1,2], [10,12], and [11,111] respectively.
    The elements are in strictly increasing order for all three.
    systemNames = ["stage_1", "stage_1", "stage_2", and "dragon"], stepNumbers = [2,1,12,111], output should be false.
    There are three independent sequences for systems "stage_1", "stage_2" and "dragon". These sequences are [2,1], [12], and [111] respectively.
    In the first sequence, the elements are not ordered properly.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Added TypeScript Syntax.
    -***Could not think of a way to refactor more simply. I noticed that I came up with the exact same solution as Dylan.

*/




