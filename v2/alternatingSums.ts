/*
Problem 10.

Several people are standing in a row and need to be divided
into two teams. The first person goes into team 1, the second goes
into team 2, the third person goes into team 1 again, the fourth goes
into team 2, and so on.

You are given an array of positive integers - the weights of the people.
Return an array of two integers, where the first element is the total weight
of team 1 and the second element is the total weight of team 2 after the division
is complete.

*/


// ------ Original way of solving ------

// function alternatingSums(arr){
//     let team1 = 0;
//     let team2 = 0;
// 
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             team1 += arr[i]
//         } else {
//             team2 += arr[i];
//         }
//     }
//     return [team1, team2];
// }


// ------ Refactored ------

function alternatingSums(arr: number[]): number[] {
    
    if ( arr.length === 0 ){ return []; }
    
    let oddSum: number = 0, evenSum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        i % 2 === 0 ? oddSum += arr[i] : evenSum += arr[i];
    }
    
    return [oddSum, evenSum];
}


console.log(alternatingSums([50,60,60,45,70]));



/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, return the sum of all
         element in the odd index, as well as the sum of all
         elements in the even index. return these numbers as 
         an array.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -an array of two numbers
    d. Can the outputs be determined from the inputs?
        -yes, no additional libraries needed.
    e. How should i label important pieces of data?
        -team1, team2
2. Explore concrete examples.
    ([50, 60, 60, 45, 70]) returns [180, 105]
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n)
    -made use of ternary operator
    -only used one let declaration
    -added typeScript syntax
    -more meaningful variables
    -added if statement which would execute if array empty.

*/

