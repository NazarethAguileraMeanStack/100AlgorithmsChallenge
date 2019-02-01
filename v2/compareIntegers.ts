/*

Problem 32.


Compare two integers given as strings.

*/


// ------ Original Way of Solving ------

// function compareIntegers(str1, str2) {

//     let num1 = +str1;
//     let num2 = +str2;

//     if (num1 === num2) {
//         return 'equal';
//     } else if (num1 > num2) {
//         return 'greater';
//     } else {
//         return 'less';
//     }

// }

// ------ Refactored ------
function compareIntegers(str1: string, str2: string): string {

    let num1: number = +str1, num2: number = +str2;

    return (!num1 || !num2) ? 'not a digit' : (num1 === num2) ? 'equal' : (num1 > num2) ? 'greater' : 'less';

}


console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));
console.log(compareIntegers('1000', 'b'));
console.log(compareIntegers('a', '1000'));
console.log(compareIntegers('a', 'c'));




/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given two strings, convert them to integers
         and then compare if the first parameter is
         less, greater, or equal to the second parameter
    b. What are the inputs that go in the problem?
        -two strings, representing numbers.
    c. What are the outputs that should come from the problem?
        -strings: 'less', 'greater', 'equal'
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resouces needed.
    e. How should i label important pieces of data?
        -num1, num2
2. Explore concrete examples.
    ('12', '13') returns 'less'
    ('875', '799') returns 'greater'
    ('1000', '1000') returns 'equal'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time
    -added extra check to see if parameters are not numbers.
    -made use of ternary operator.
    -added TypeScript Syntax.

*/

