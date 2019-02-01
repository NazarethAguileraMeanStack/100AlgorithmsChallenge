/*

Problem 29.

Consider integer numbers from 0 - n-1, written down along the circle
in such a way that the distance between any two neighbouring numbers
is equal (not that 0 and n-1 are neightbouring too).

Given n and firstNumber, find the number which is written
in the radially opposite position to firstNumber.

*/

// ------ Original Way of Solving ------

// function circleOfNumbers(numOfPoints, target) {

//     let pointsOnCircle = [];
//     let midpoint = numOfPoints / 2;
//     let opposite = 0;

//     for (let i = 0; i < numOfPoints; i++) {
//         pointsOnCircle.push(i);
//     }

//     if (target + midpoint > numOfPoints) {
//         opposite = target + midpoint - numOfPoints;
//         return pointsOnCircle[opposite]
//     } else {
//         opposite = target + midpoint;
//         return pointsOnCircle[opposite]
//     }

// }

function circleOfNumbers(numOfPoints: number, target: number): number {

    let pointsOnCircle: number[] = [];
    let midpoint: number = Math.floor(numOfPoints / 2);
    let opposite: number = target + midpoint;

    for (let i = 0; i < numOfPoints; i++) {
        pointsOnCircle.push(i);
    }

    return  (opposite >= numOfPoints) ? pointsOnCircle[opposite - numOfPoints]: pointsOnCircle[opposite];

}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 3));
console.log(circleOfNumbers(10, 4));
console.log(circleOfNumbers(10, 5));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a circle with points and a target point,
         find the point in the circle that is opposite
         to the target point. Circle points start at 0.
    b. What are the inputs that go in the problem?
        -a number of points, and a target point.
    c. What are the outputs that should come from the problem?
        -return a number.
    d. Can the outputs be determined from the inputs?
        -A visual diagram is needed.
    e. How should i label important pieces of data?
        -targetPoint, numofPoints.
2. Explore concrete examples.
    (10, 2) returns 7
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) linear time.
    -made use of ternary operator.
    -moved bulk of logic into variable initialization instead of return statement
     to try to keep to a DRY concept.
    -Accounted for uneven number of elements
    -added TypeScript Syntax
*/




