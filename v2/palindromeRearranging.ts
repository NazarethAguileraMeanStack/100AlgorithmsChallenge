/*

Problem 78. Palindrome Rearranging

Given a string, find out if its characters can be rearranged to form
a palindrome.

*/

// ------ Original Way of Solving ------

// function palindromeRearranging(str) {
//     let test = str.split('').sort();
    
//     for (let i = 0; i < test.length; i++) {
//         if (test[i] === test[i + 1]) {
//             test.splice(0, 2);
//             i--;
//         }
//     }

//     return test.length < 2;
// }

function palindromeRearranging(str: string): boolean {
    let word = str.split('').sort(), obj = {}, uniqueValues = 0;

    for (let i = 0; i < word.length; i++) {
        (obj.hasOwnProperty(word[i])) ? obj[word[i]]++ : obj[word[i]] = 1;
    }

    for (let i = 0; i < str.length; i++) {
        uniqueValues += (obj[str[i]] % 2);
        obj[str[i]] = 0;
    }

    return uniqueValues < 2;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('hello'));
console.log(palindromeRearranging('rcearca'));
console.log(palindromeRearranging('Nazareth'));
console.log(palindromeRearranging('sssstw'));
console.log(palindromeRearranging('level'));






/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a string, can you rearrange the letters in a way
         that the letters form a palindome?
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed
    e. How should i label important pieces of data?
        -letters
2. Explore concrete examples.
    ('aabb') returns true.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(n^2) Quadratic Time to O(n) Linear time.
        ***.splice() is a linear time method, since it was nested in the
        ***for-loop in the first solution, it was quadratic time.
    -Introduced an object to hold values.
    -made use of ternary operator.
    -added TypeScript Syntax.
    -more descriptive variable names.

*/

