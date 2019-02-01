/*

Problem 63. Incorrect Password Attempts


One Very Important (VIU) has a Very Confidential Document (VCD)
stored on his Dropbox Account. He doesn't let anyone see the VCD,
especially his roommates who often have access to his devices.

Opening the Dropbox mobile app on the VIU's tablet requires a four-digit
passcode. To ensure the confidentiality of the stored information, the device
is locked out of Dropbox after 10 consecutive failed passcode attempts. We need
to implement a function that given an array of attempts made throughout the day
and the correct passcode checks to see if the device should be locked.
i.e. 10 or more consecutive failed passcode attempts were made.

*/

// ------ Original Way of Solving -----

// function incorrectPasswordAttempts(passcode, attempts) {

//     let counter = 0;
//     for (let i = 0; i < attempts.length; i++) {
//         if (attempts[i] === passcode) {
//             counter = 0;
//         } else {
//             counter++;
//             if (counter >= 10) {
//                 return true;
//             }
//         }   
//     }

//     return false;

// }


// ------ Refactored ------

function incorrectPasswordAttempts(passcode: string, attempts: string[]) {

    let counter: number = 0, item: number = 0;
    return checkAttempts(attempts);

    function checkAttempts(attempts) {
        if (attempts[item] === passcode) counter = 0;
        if (attempts[item] !== passcode) counter++;
        if (counter >= 10) return true;
        if (item >= attempts.length) return false;
        item++;
        return checkAttempts(attempts);
    }

}


console.log(incorrectPasswordAttempts(
   '1111' ,['1111','4444','9999','3333','8888','2222','7777','0000','6666','7285','5555','1111']
));
console.log(incorrectPasswordAttempts(
    '1111' ,['1111','4444','9999','3333','8888','2222','7777','0000','6666','7285','1111']
 ));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -iterate through the attempts. If the attempts do
         not match the passcode 10 times or more, it should be
         locked, return true. If less than 10, return false.
    b. What are the inputs that go in the problem?
        -a string, an array of strings.
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -passcode, attempts, counter
2. Explore concrete examples.
('1111' ,['1111','4444','9999','3333','8888','2222','7777','0000','6666','7285','5555','1111']) returns true;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
 -Kept O(n) linear time
 -Made use of a recursive helper method to eliminate for-loop
 -added TypeScript Syntax.

*/

