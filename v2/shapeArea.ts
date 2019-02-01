/*

88. Shape Area

-Given an number n, find the Area of the Polygon.

****I didn't feel like writing everything on the video. :(


*/


// ------ Original Way of Solving -----
// function shapeArea(value){
//     return Math.pow(value,2) + Math.pow(value - 1, 2);
// }


// ------ Refactored ------

function shapeArea(value: number): number {
    return Math.pow(value,2) + Math.pow(value - 1, 2);
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number n, find the area of the Polygon...
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -A number
    d. Can the outputs be determined from the inputs?
        -You should use a visual aid for assistance.
    e. How should i label important pieces of data?
        -value.
2. Explore concrete examples.
    n = 1; output should be 1.
    n = 2; output should be 5.
    n = 3; output should be 13.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Added TypeScript Syntax.
    -Original Way was already a one line, O(1) constant time. Can't improve much beyond that.

*/



