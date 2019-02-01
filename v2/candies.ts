/*

Problem 22.

n children have got m pieces of candy. They want to eat
as much as they can, but each child must eat exactly the same
amount of candy as any other child. Determine how many pieces
of candy will be eaten by all the children together. Individual
pieces of candy cannot be split.

*/

// ------ Original Way of Solving ------


// function candies(children, numOfCandy) {
//     return children * (numOfCandy % children);
// }


// ------ Refactored ------

function candies(children: number, numOfCandy: number) {
    if (numOfCandy < children) return null;
    return children * (numOfCandy % children);
}

console.log(candies(3, 10));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number of children and a number of
         candies, what is the maximum number of candies
         each child can get if distributed evenly.
    b. What are the inputs that go in the problem?
        -two numbers
    c. What are the outputs that should come from the probslem?
        -a single num
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -children, candies, total?
2. Explore concrete examples.
    candies(3,10) returns 9.
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -O(1) this is a constant time function.
    -Added an edge case where if the numOfChilren is less than numOfCandy,
     it would be impossible to distribute evenly.
    -Added TypeScript Syntax

*/
