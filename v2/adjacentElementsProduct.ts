/*
Problem 5

Given an array of integers, find the pair of adjacent elements
that has the largest product and return that product.

*/


function adjacentElementsProduct(numArray: number[]): number {

    let productArray: number[] = [];
    
    for (let i = 0; i < numArray.length - 1; i++){
        productArray.push(numArray[i] * numArray[i + 1]);
    }

    return Math.max(...productArray);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([1,1,1,1,1,2]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -I want to find the biggest multiplication number
         that can be made with two adjacent numbers in 
         a given array.
    b. What are the inputs that go in the problem?
        -an array of numbers.
    c. What are the outputs that should come from the problem?
        -return a number, can be positive or negative depending on array.
    c. Can the outputs be determined from the inputs?
        -yes. No further resources needed.
    e. How should i label important pieces of data?
        -productArray,
2. Explore concrete examples.
    inputArray = [3,6,-2,-5,7,3], returns 21
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    -Solved in about 5 min.
5. Refactor
    -added TypeScript syntax.
    -removed sorting method.
    -made use of spread operator and Math.max() method.
    -Likely O(n), Not sure what the big O of the spread operator is.
*/