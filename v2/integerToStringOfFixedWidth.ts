/*

Problem 64. Integer To String of Fixed Width

Given a positive integer number and a certain length, we need to 
modify the given number to have a specified length. We are allowed to do that
by cutting out leading digits (if the number needs to be shortened) or by adding
0s in front of the original number.

*/


// ------ Original Way of Solving -------

// function integerToStringOfFixedWidth(digits, size) {

//     let strDigits = digits.toString();
//      if (strDigits.length < size) {
//         let difference  = size - strDigits.length;
//         let padding = '';
//         for (let i = 0; i < difference; i++) {
//             padding += '0';
//         }
//         return padding + strDigits;
//      } else if (strDigits.length > size) {
//         let temp = '';
//         for (let i = strDigits.length -1 ; i > ((strDigits.length - 1) - size); i--) {
//             temp += strDigits[i];
//         }
//         return temp.split('').reverse().join('');
//      } else {
//          return strDigits;
//      }
// }

// ------- Refactored ------------

function integerToStringOfFixedWidth(digits: number, size: number): string {

    let strDigits: string = digits.toString();

    if (strDigits.length < size) {
        return addDigits(strDigits, size); 
    } else if (strDigits.length > size) {
        return removeDigits(strDigits, size);
    } else {
        return strDigits;
    } 

    function addDigits(str: string, targetLength: number): string {
        let padding: string = '';
        for (let i = 0; i < (targetLength - str.length); i++) {
            padding += '0';
        }
        return padding + str;
    }

    function removeDigits(str: string, targetLength: number): string {
        return str.slice(str.length - targetLength);
    }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number, convert it to a string. If the number
         has less digits then the size number, add 0s to the front.
         if it has more digits than the size, remove digits from the
         front of the string.
    b. What are the inputs that go in the problem?
        -a number, a number
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes no extra resources needed.
    e. How should i label important pieces of data?
        -digits, size,
2. Explore concrete examples.
    (1234, 2) returns '34'
    (1234, 4) returns '1234'
    (1234, 5) returns '01234'  
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor

*/

