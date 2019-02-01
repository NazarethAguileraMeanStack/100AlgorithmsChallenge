/*

Problem 24.

Given a year, return the century it is in. The first century spans from the year 1
up tp and including year 100. The second - from year 101 up to and including
year 200, etc.

*/

// ------ Original Way of Solving -----

// function centuryFromYear(year) {
    
//     let century = year.toString();

//     if (+century[3] > 0) return parseInt(century[0] + century[1]) + 1; 
//     return parseInt(century[0] + century[1]);
// }

// ------ Refactored ------

function centuryFromYear(year: number): number {
    
    let century: string = year.toString();
    let centuryOutput: number = parseInt(century[0] + century[1]);

    return (+century[3] > 0) ? centuryOutput + 1 : centuryOutput;
}


console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2018));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a year, find out which century that year
         categorically belongs to.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number representing the century.
    d. Can the outputs be determined from the inputs?
    e. How should i label important pieces of data?
2. Explore concrete examples.
    (1905) returns 20
    (1700) reutrns 17
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(1) constant time function.
    -made use of ternary operator.
    -put expression in a variable to implement DRY concept.
    -add TypeScript Syntax.

*/


