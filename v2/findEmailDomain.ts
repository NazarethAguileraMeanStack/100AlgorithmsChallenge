/*

Problem 54. Find Email Domain

An email address such as 'John.Smith@example.com' is made up of a local
part ('John.Smith'), an @ symbol, then a domain part ('example.com').

The domain name part of an email address may only consist of letters, digits,
hyphens and dots. The local part, however, also alows a lof of different special
characters. Here you can look at several exmaples of correct and incorrect email
addresses.

Given a valid email address, find it's domain part.

*/

// ------ Original Way of Solving ------

// function findEmailDomain(email) {

//     let domainName = '';
//     let start = 0;

//     for (let i = email.length; i > 0; i--) {
//         if (email[i] === '@') {
//             start = i;
//             break;
//         }
//     }

//     for (let i = start + 1; i < email.length; i++) {
//         domainName += email[i];
//     }

//     return domainName;
// }

// ------ Refactored -------

function findEmailDomain(email: string): string {

    return email.slice(email.lastIndexOf('@') + 1);

}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[];@!#%$&*+=;?^_{}||\/.@example.org'));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given an email address, find the domain after the @ symbol.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -email, domainName
2. Explore concrete examples.
    ('prettyandsimple@example.com') returns 'example.com'
    ('<>[];@!#%$&*+=;?^_{}||\/.@example.org') returns 'example.org'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -added TypeScript Syntax.
    -removed unnecessary variable declarations.
    -added TypeScript Syntax.
*/

