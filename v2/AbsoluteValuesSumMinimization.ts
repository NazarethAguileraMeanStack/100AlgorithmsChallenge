

/*
Problem 1

Given a sorted array of integers, find an integer x from a such that the value of
abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value). If there are several
possible answers, output the smallest one.

*/

function absoluteValuesSumMinimization(a : number[]): number {
    a.sort();
    let median = Math.floor(a.length / 2);
    return a.length % 2 == 0 ? a[median - 1] : a[median];  
}



console.log(absoluteValuesSumMinimization([2,4,7]));
console.log(absoluteValuesSumMinimization([2,4,7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2,4,7, 6, 6, 8]));






/*

How do we solve problems?

1. Understand the problem.
    a. Restate the problem in your own words.
        -I want to know which number in the array, if i subtract from
         each number in the array, and then added all the numbers in
         the array together, which subtracting number would give me the
         smallest sum.
    b. What are the inputs that go in the problem?
        -I will receive an array of numbers.
    c. What are the outputs that should come from the problem?
        -This should return a single positive number.
    c. Can the outputs be determined from the inputs?
        -Yes, no further research is necessary.
    e. How should i label important pieces of data?
        -sumsArray
2. Explore concrete examples.
    - a = [2,4,7], the output is 4.
        abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5 **correct
        abs(2 -2) + abs(4 - 2) + abs(7 - 2) = 7 **wrong
        abs(2 - 7) + abs(4 - 7) + abs(7-7) = 8 **wrong
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    - Done. Needed help to see way of approaching problem.
5. Refactor
    -made use of ternary operator, combining if and return statemnet.

*/

