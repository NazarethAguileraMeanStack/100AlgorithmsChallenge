/*

77. New Numeral System

-Your informatics teacher at school likes coming up with new ways to help you understand the material.
When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help
clarify things. His numeral system has a base 26, and its digits are represented by English Capital letters. A - 0,
B for 1, etc.

-The teacher assigned you the following numeral system exercise: given a one-digit number, you should fine all unordered pairs
of one-digit numbers whose values add up to number.

EXAMPLE:

for number = "G", the output should be newNumeralSystem() = ["A + G", "B + F", "C + E", "D + D"];

translating this into decimal, we get number = 6, so its ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

*/

function newNumeralSystem(number){

    let numerals = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);

    while(startCharCount <= endCharCount){
        let numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }


    return numerals;

}

console.log(newNumeralSystem('G'));