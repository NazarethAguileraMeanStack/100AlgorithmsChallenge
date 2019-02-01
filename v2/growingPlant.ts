/*

Problem 59. Growing Plant

Each day a plant is growing by upSpeed meters. Each night that plant's
height decreases by downSpeed meters due to lack of sun heat. Initially,
the plant is 0 meters. We plant the seed at the beginning of a day. We want
to know when the height of the plant will reach a certain level.

*/

//------ Original Way of Solving ------

// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     let days = 0;
//     let currentHeight = 0;

//     while (currentHeight < desiredHeight) {
//         currentHeight += upSpeed;
//         if (currentHeight > desiredHeight) break;
//         currentHeight -= downSpeed;
//         days++;
//     }
//     return days;
// }


// ------ Refactored ------

function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let days: number = 0, currentHeight: number = 0;

    while (currentHeight <= desiredHeight) {
        currentHeight += upSpeed;
        if (currentHeight > desiredHeight) break;
        currentHeight -= downSpeed;
        days++;
    }
    return days;
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 1, 1000));
console.log(growingPlant(15, 11, 910));
console.log(growingPlant(5, 2, 100));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a series of numbers, which represents increase and decrease,
         how many cycles until the target value is reached.
    b. What are the inputs that go in the problem?
        -a number, a number, a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -upSpeed, downSpeed, desiredHeight, days
2. Explore concrete examples.
    upSpeed = 100, downSpeed = 10, desiredHeight = 910; should return 10
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Added TypeScript Syntax
    -Added Edge case in case we hit exactly the desiredHeight.

*/
