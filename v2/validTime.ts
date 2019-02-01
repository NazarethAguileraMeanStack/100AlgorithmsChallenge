/*

Problem 100. Valid Time

Check if the given string is a correct time prepresentation of a 24-hour clock.

*/

// ------- Original Way of Solving -------

// function validTime(timeString){

//     let testTime = timeString.split(":");
//     if(parseInt(testTime[0]) >= 24 || parseInt(testTime[0]) < 0){
//         return false;
//     }
//     if (parseInt(testTime[1]) >= 60 || parseInt(testTime[1]) < 0){
//         return false;
//     }

//     return true;

// }

// ------ Refactored ------

function validTime(timeString: string): boolean {

    let testTime = timeString.split(":");

    if(+testTime[0] >= 24 || +testTime[0] < 0) return false;
    if (+testTime[1] >= 60 || +testTime[1] < 0) return false;

    return true;

}


console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -determine if the string is a valid time on the 24-hour clock.
    b. What are the inputs that go in the problem?
        -a string
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -Yes, but you should know 60 minutes are in an hour, and there are 24 hours in a day.
    e. How should i label important pieces of data?
        -testTime
2. Explore concrete examples.
    For time = "13:58", output should be true;
    for time = "25:51", output should be false;
    for time = "02:76", output should be false;
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -made use of Type Conversion since its faster than parseInt().
    -added TypeScript Syntax.
    -made use of single line if-statement.

*/


/*

If you made it to the end of this challenging course, I congratulate you! This was a tough climb and I hope my solutions helped you along
the way. :)

'Every mountain top is within reach if you just keep climbing'
                                                -Barry Finlay


*/

