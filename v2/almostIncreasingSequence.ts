/*
Problem 7.

Given a sequence of integers as an array, determine whether
its possible to obtain strictly increasing sequence by removing
no more than one element from the array.

*/

function almostIncreasingSequence(sequence: number[]){
    let count: number = 0;

    for (let i = 0; i < sequence.length - 1; i++){
        if (sequence[i] >= sequence[i + 1]){
            count++;
            if (count > 1){
                return false;
            }
        }
    }

    return true;
}


console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 4, 5, 7]));
console.log(almostIncreasingSequence([1, 1, 2, 4, 1]));





/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -determine if the array of numbers is in an
         increasing order, if if I remove at most
         one element from the array
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -boolean, true or false
    d. Can the outputs be determined from the inputs?
        -yes, no further sources needed.
    e. How should i label important pieces of data?
        -counter
2. Explore concrete examples.
    sequence = [1,3,2,1]; returns false
    sequence = [1, 3, 2]; returns true
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
    -solved under 5 min.
5. Refactor
    -Added TypeScript syntax.
    -adjusted variable names to be more descriptive.
    -adjusted logic to count for cases where sequence
     has equal number.
*/

