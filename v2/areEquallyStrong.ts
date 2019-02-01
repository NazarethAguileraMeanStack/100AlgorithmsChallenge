/*

Problem 11.

Call two arms equally strong if the heaviest weights they are able
to life are equal.

Call two people equally strong if their strongest arms are equally
strong (the strongest arm can be both the right and the left), and so are
their weakest arms.

Given your and your friend's lifting capabilites, find if you two are equally
strong.

*/



// ------ Original Way of solving ------

// function areEquallyStrong(myLeft: number, myRight: number, friendLeft: number, friendRight: number): boolean {
//     let myTotalStrength: number = myLeft + myRight;
//     let myFriendsStrength: number = friendLeft + friendRight;

//     return myTotalStrength === myFriendsStrength;
// }


// ------ Refactored ------

function areEquallyStrong(...strengthValues: number[]): boolean {
    return strengthValues[0] + strengthValues[1] === strengthValues[2] + strengthValues[3];
}

console.log(areEquallyStrong(10,15, 15, 10));
console.log(areEquallyStrong(10,15, 10, 15));
console.log(areEquallyStrong(10,15, 15, 9));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a set of numbers, determine if the combined values
         of one person is equal to another.
    b. What are the inputs that go in the problem?
        -4 numbers arguments
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no libraries needed
    e. How should i label important pieces of data?
        -myLeft, myRight, friendLeft, friendRight
2. Explore concrete examples.
    (10,15,15,10) returns true
    (15,10,15,10) returns true
    (15,10,15,9)  returns false
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -(1) constant time kept
    -eliminated use of variables
    -made use of spread operator
    -reduced lines needed.
*/