/*

Problem 55. First Digit

for inputString = 'var_1_int', the output should be '1'.
for inputString = 'q2q-q', the output should be '2'.
for inputString = '0ss', the output should be '0'.

*/

// ------ Original Way of Solving ------

// function firstDigit(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (parseInt(str[i]) || str[i] === '0') {
//             return str[i];
//         }
//     }

// }

// ------ Refactored ------

function firstDigit(str): string {

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) return str[i];
    }
    

}

console.log(firstDigit('var_1_int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, find the first digit that appears
         and return that digit.
    b. What are the inputs that go in the problem?
        -a string with a digit in it.
    c. What are the outputs that should come from the problem?
        -a char
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -digit, str
2. Explore concrete examples.
    for inputString = 'var_1_int', the output should be '1'.
    for inputString = 'q2q-q', the output should be '2'.
    for inputString = '0ss', the output should be '0'.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -made use of isNan() to eliminate OR statement
    -made use of single line if-statement syntax.

*/

