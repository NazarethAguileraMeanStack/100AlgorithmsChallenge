/*
Problem 4.

You are given a two-digit integer n. Return the sum of its digits.

*/


function addTwoDigits(num: number): number {
    let arr: string[] = num.toString().split('');
    return (+arr[0]) + (+arr[1]);
}



console.log(addTwoDigits(29));
console.log(addTwoDigits(11));
console.log(addTwoDigits(44));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Break a two-digit number into single digits and
         give their sum.
    b. What are the inputs that go in the problem?
        -A single two-digit number.
    c. What are the outputs that should come from the problem?
        -Return a number.
    c. Can the outputs be determined from the inputs?
        -Yes. No further resources needed.
    e. How should i label important pieces of data?
        -Sum, firstDigit, secondDigit
2. Explore concrete examples.
    n = 29, return 11
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    -solved pretty easy. Under 5 min. Needed to refresh
     on how to do type conversion.
5. Refactor
    -updated to TypeScript Syntax.
    -removed unnecessary array
    -removed 3 unecessary variable declarations.
    -cut from 7 lines to 2.
    -made use of chaining methods.
    -switched from Number(arr[0]) to (+arr[0]),
        -further research showed this is a faster
         type conversion. Today I Learned.
    -This should be O(1)?
*/

