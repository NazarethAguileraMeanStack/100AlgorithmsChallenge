/*
Problem 6.

Given an array of strings, return another array containing
all of its longest strings.

*/

function allLongestStrings(arr: string[]): string[] {

    let lengthsArray: number[] = arr.map(word => word.length);
    let biggestWordLength: number = Math.max(...lengthsArray);
    return arr.filter(((element) => {return element.length === biggestWordLength}));
}


console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings(['bb','aaa','sdisdjiaosjd']));
console.log(allLongestStrings(['alpha', 'alpha', 'beta', 'alpha', 'alpha']));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -return an array containing the longest
         word in an array of strings.
        -if more there are multiple words, also
         add them to the array.
    b. What are the inputs that go in the problem?
        -An array of strings.
    c. What are the outputs that should come from the problem?
        -This should be an array of one or more words, aslong
         as the array of words does not contain a bunch of empty
         strings.
    d. Can the outputs be determined from the inputs?
        -Yes. No further resources needed.
    e. How should i label important pieces of data?
        -biggestWordsArray
2. Explore concrete examples.
    inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'], returns ['aba', 'vcd', 'aba']
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    -Solved in about 5 min. No real issues. O(n);
5. Refactor
    -removed both for loops
    -eliminated initializing an array in the function
     for holding values
    -made use of higher level functions: .map, .max, .filter
    -should still be O(n), but this might be O(n^2) because
     of .map inside Math.max();
        -refactored more. Adding a new variable to and 
         use Math.max() on it to maintain O(n).

*/

