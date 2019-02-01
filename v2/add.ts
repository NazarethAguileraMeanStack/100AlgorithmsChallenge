/*

Problem 2

1.Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless # of parameters.

*/


function add(...arr: number[]): number {
    return arr.reduce((total, element) => { return total += element});
}


console.log(add(1,3));
console.log(add(37,3));
console.log(add(2,2,2,2,2));
console.log(add(2,2));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Add numbers together regardless of the number of parameters
    b. What are the inputs that go in the problem?
        -Any number of numbers.
    c. What are the outputs that should come from the problem?
        -I want to find the sum of all numbers given.
    c. Can the outputs be determined from the inputs?
        -Yes, no help necessary.
    e. How should i label important pieces of data?
        -sum, list of arguments.
2. Explore concrete examples.
    - p1 = 1, p2 = 2; add(p1,p2) = 3;
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    - solved. Solved under 5 min.
5. Refactor
    -maintained O(n), cut lines of code into one.
    -eliminated for loop and replaced with .reduce,
    combining return and for loop
    -applied TypeScript Syntax

*/

