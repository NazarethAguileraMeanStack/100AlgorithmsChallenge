/*

Problem 91. Stolen Lunch

When you recently visited your little nephew, he told you a sad story: there's a bully at school
who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange coded message.
Your nephew gave you one of the notes in hopes that you can decipher it. And you did, it looks like all
the digits in it are replaced with letters and vice-versa. Digit 0 is "a", and 1 is "b", and so on with digit 9 replaced by "j".
The note is different every day, so you decide to write a function that will decipher it for your nephew.


*/


// ------- Original Way of Solving -------

// function stolenLunch(msg){

//     let decoded = msg.split("");
//     let decipher = "";

//     let dictionary = {
//         "0":"a", "1":"b", "2":"c", "3":"d", "4":"e", "5":"f", "6":"g", "7":"h", "8":"i", "9":"j",
//         "a":"0", "b":"1", "c":"2", "d":"3", "e":"4", "f":"5", "g":"6", "h":"7", "i":"8", "j": "9",
//     };

//     decoded.forEach(element => {
//         if(dictionary[element]){
//            decipher +=  dictionary[element];
//         } else {
//             decipher += element;
//         }
//     });

//     return decipher;

// }

// ------ Refactored ------
function stolenLunch(msg: string): string {

    let dictionary = {
        "0":"a", "1":"b", "2":"c", "3":"d", "4":"e", "5":"f", "6":"g", "7":"h", "8":"i", "9":"j",
        "a":"0", "b":"1", "c":"2", "d":"3", "e":"4", "f":"5", "g":"6", "h":"7", "i":"8", "j": "9",
    };

    return msg.split('').map(element => { return (dictionary[element]) ? dictionary[element] : element; }).join('');

}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a string, replace letters a-j with 0-9 and vice versa.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -Dictionary, decipher
2. Explore concrete examples.
    ("you'll n4v4r 6u4ss 8t: cdja") the output is "you'll never guess it: 2390".
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -Made use of ternary operator
    -Removed unnecessary variable declarations.
    -made use of .map method to iterate.
    -added TypeScript Syntax.

*/

