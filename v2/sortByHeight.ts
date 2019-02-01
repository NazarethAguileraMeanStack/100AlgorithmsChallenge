/*

Problem 89. Sort By Height

Some people are standing in a row in a park. There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving trees.

*/


// ------ Original Way of Solving -------

// function sortByHeight(heights){

//     let initialArrayLength = heights.length;
//     let treesIndex = [];
//     let sortedWithTrees = [];
//     let index = 0;

//     for(let i = 0; i < heights.length; i++){
//         if (heights[i] == -1){
//             treesIndex.push(i);
//         }
//     }

//     let sortedArray = heights.filter((element)=>{return element != -1}).sort();

//     for(let i = 0; i < initialArrayLength; i++){
//         if (treesIndex.includes(i)){
//             sortedWithTrees.push(-1);
//         } else {
//             sortedWithTrees.push(sortedArray[index]);
//             index++;
//         }
//     }


//     return sortedWithTrees;

// }


// ------ Refactored -------

function sortByHeight(heights){

    let sortedHeights: number[] = [], result: number[] = [];
    let sortedHeightsIndex = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== -1) sortedHeights.push(heights[i]);
    }

    sortedHeights = sortedHeights.sort();

    for (let i = 0; i < heights.length; i++) {
        (heights[i] === -1) ? result.push(-1) : result.push(sortedHeights[sortedHeightsIndex++]);
    }


    return result;

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, return the array, but in sorted order,
         without moving the index of any of the -1 values.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -an array of numbers
    d. Can the outputs be determined from the inputs?
        Yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -heights, sortedTrees, TreesIndex
2. Explore concrete examples.
    for a = [-1,150, 190, 170, -1, -1, 160, 180], the output should be [-1,150,160,170,-1,-1,180,190]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -added TypeScript Syntax.
    -Made use of one-life if statement
    -made use of ternary operator
    -eliminated unnecessary variable delcaration

*/

