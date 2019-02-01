/*

Problem 61. House of Cats

There are some people and cats in a house. You are given the number
of legs they have all together. Your task is to return an array
containing every possible number of people that could be in the house
sorted in ascending order. It's guranteed that each person has 2 legs
and each cat has 4 legs.

*/


// ------ Original Way of Solving ------

// function houseOfCats(numOfLegs) {

//     let possibleCombinations = [];
//     while ( 0 <= numOfLegs) {
//         possibleCombinations.push(numOfLegs / 2);
//         numOfLegs -= 4;
//     }

//     return possibleCombinations;
// }

function houseOfCats(numOfLegs: number): number[] {

    let possibleCombinations: number[] = [];
    return possibleNumOfHumanLegs(numOfLegs);

    
    
    function possibleNumOfHumanLegs(num) {
        if (num <= 0) return possibleCombinations;
        possibleCombinations.push(num / 2);
        return possibleNumOfHumanLegs(num - 4);
    }
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(10));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number, return an array showing the
         possible combinations of 2 that can do into
         the number.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -an array of number(s)
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -people, numOfLegs
2. Explore concrete examples.
    (6) returns [1,3]
    (2) returns [1]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time
    -made use of a recursive helper method.
    -added TypeScript Syntax
*/

