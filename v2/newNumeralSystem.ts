/*

Problem 77. New Numeral System

Your informatics teacher at school likes coming up with new ways to help
you understand the material. When you started studying numeral systems, he
introduced his own numeral system, which he's convinced will help clarify things.
His numeral system has base 26, and its digits are represented by English Capital
letters - A for 0, B for 1 and so on.

The teacher assigned you the following numeral system exercise: given a one-digit
number, you should find all unordered pairs of one-digit numbers, whose values add up
to the number.

*/

// ------ Original Way of Solving ------

// function newNumeralSystem(letter) {

//     let dictionary = [
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
//         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//     ];

//     let start = 0;
//     let end = dictionary.indexOf(letter);

//     let initalArray = [];
//     let combinations = [];

//     for (let i = 0; i <= end; i++) {
//         initalArray.push(i);
//     }

//     while (start <= end) {
//         combinations.push([dictionary[initalArray[start]]] + ' + ' + dictionary[initalArray[end]]]);
//         start++;
//         end--;
//     }
//     return combinations;

// }

// ------ Refactored ------
function newNumeralSystem(letter: string): string[] {

    let dictionary = [ 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let start: number = 0;
    let end: number = dictionary.indexOf(letter);
    let combinations: string[] = [];

    while (start <= end) {
        combinations.push(`${dictionary[start]} + ${dictionary[end]}`);
        start++;
        end--;
    }
    return combinations;

}


console.log(newNumeralSystem('G'));
console.log(newNumeralSystem('H'));
console.log(newNumeralSystem('J'));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a letter which represents a number,
         find the possible sums which equal to the letter,
         return the array of the possible combinations.
    b. What are the inputs that go in the problem?
        -a letter
    c. What are the outputs that should come from the problem?
        -an array of strings
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed
    e. How should i label important pieces of data?
        -start, end, combinations, dictionary
2. Explore concrete examples.
    ('G') returns ['A + G', 'B + F', 'C + E', 'D + D']
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -Removed unnecessary array variable declaration
    -Made use of template literal.

*/

