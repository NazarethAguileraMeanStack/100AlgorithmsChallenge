/*

Problem 42.

Let's define digit degree of some positive integer as the number of times
we need to replace this number with the sum of its digits until
we get to teh one digit number.

Given an integer, find its digit degree.


*/

// ------ Original Way of Solving ------

// function digitDegree(num) {

//     let strNum = num.toString();
//     let counter = 0;
//     while (strNum.length > 1){
//         strNum = strNum.split('');
//         strNum = strNum.reduce((total, element) => { return +total + +element;});
//         strNum = strNum.toString();
//         counter++;        
//     }

//     return counter;
// }

// ------ Refactored ------

function digitDegree(num: number): number {

    let counter: number = 0; 
    let strNum: any = num.toString();
    
    while (strNum.length > 1) {
        strNum = strNum.split('').reduce((total, element) => { return +total + +element;}).toString();
        counter++;        
    }

    return counter;
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a number, split the number, and add
         those two digits together. Repeat until there
         is one digit. Return the amount of times this
         process was needed until we have a one digit
         number.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -numOfRepeats, 
2. Explore concrete examples.
    (5) retuns 0;
    (100) returns 1
    (91) returns 2.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n^2) Quadratic time, but we need to iterate through
     the number of digits the num is split into, inside
     of a while loop.
    -made use of cascading methods.
    -added TypeScript Syntax.


*/

