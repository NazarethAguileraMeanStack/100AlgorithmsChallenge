/*

Problem 90. Sort By Length

Given an array of strings, sort them in the order of increasing
lengths. If two strings have the same length, their relative order
must be the same as the inital array.

*/

// ------ Original Way of Solving ------

// function sortByLength(arr) {
//     return arr.sort((element1, element2) => { return element1.length - element2.length});

// }

// ------ Refactored -------

function sortByLength(arr: string[]): string[] {
    return arr.sort((element1, element2) => { return element1.length - element2.length});

}

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']));
console.log(sortByLength(['aca','bbb', '', 'aaa', 'a', 'zz']));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
    b. What are the inputs that go in the problem?
    c. What are the outputs that should come from the problem?
    d. Can the outputs be determined from the inputs?
    e. How should i label important pieces of data?
2. Explore concrete examples.
    (['abc', '', 'aaa', 'a', 'zz']) returns ['', 'a', 'zz', 'abc', aaa]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -added TypeScript Syntax.
    -Already one line of code at O(n) time.
    -No real improvements.

*/

