/*

Problem 58. Flatten Array


Flatten a nested array. You must account for varying levels
of nesting

*/

// ------ Original Way of Solving -------

// function flattenArray(arr) {
//     let test = arr.toString().replace(/,/g, '').split('');
//     return test.map((element) => {
//         if (parseInt(element)) {
//             return +element;
//         } else {
//             return element
//         }
//      });
// }

// ------ Refactored ------

function flattenArray(arr: any[]): any[] {
    return arr.toString().replace(/,/g, '').split('').map((element) => { return (parseInt(element)) ? +element : element; });
}


console.log(flattenArray([[['a'],['b']]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
console.log(flattenArray([[['a', [[[[1]]]]], 2]]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given nested array, return the value
         as a single array.
    b. What are the inputs that go in the problem?
        -A multidimensional array
    c. What are the outputs that should come from the problem?
        -a one-dimensional array
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -outerArray
2. Explore concrete examples.
    ([[['a'],['b']]])) returns ['a', 'b']
    ([1, [2], [3, [[4]]]])) returns [1,2,3,4]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -made use of cascading methods to eliminate unnecessary variable declaration.
    -made use of ternary operator
    -added TypeScript Syntax
    -One line of code!!!!
*/




