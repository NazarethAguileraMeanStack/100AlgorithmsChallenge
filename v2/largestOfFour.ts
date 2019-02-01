/*

Problem 68. Largest of Four

Return an array consisting of the largest number from each
provided sub-array. For simplicity, the provided array will
contain

*/

// ------- Original Way of Solving ------

// function largestOfFour(arr) {

//     let largest = [];
//     for (let i = 0; i < arr.length; i++) {
//         largest.push(Math.max(...arr[i]));
//     }
//     return largest;
// }

// ------- Refactored -------

function largestOfFour(arr: number[][]): number[] {

    return arr.map((element) => { return Math.max(...element); });

}

console.log(largestOfFour([[4,5,1,3],[12,27,18,26],[32,35,37,39],[1000,1001,857,1]]));
console.log(largestOfFour([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a multidimensional array, return an array
         that contains the largest of each subarray.
    b. What are the inputs that go in the problem?
        -a multidimensional number array
    c. What are the outputs that should come from the problem?
        -a number array
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -largest, arr
2. Explore concrete examples.
    ([[4,5,1,3],[12,27,18,26],[32,35,37,29],[1000,1001,857,1]]) returns [27,5,39,1001]
    ([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]) returns [9,35,97,1000000]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -removed unnecessary variable delcaration.
    -made use of the .map method to remove for-loop.
    -added TypeScript Syntax.

*/

