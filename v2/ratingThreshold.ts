/*

Problem 83. Rating Threshold

In Thumbtack, users are able to rate Pros based on their experience working
with them. Each rating is an integer ranging from 1 to 5, and all ratings are
averaged to produce a singel number rating for any given Pro. Those Pros who have
a rating lower than a specified threshold are manually reviewed by Thumbtack staff
to ensure high quality of service.

You're given a list of ratings for some Pros. Find out which Pros should be manually
reviewed.

*/

// ------ Original Way of Solving ------

// function ratingThreshold(threshold, ratings) {

//     let averages = [];

//     for (let i = 0; i < ratings.length; i++) {
//         averages.push((ratings[i].reduce((total, element) => { return total += element}) / ratings[i].length));
//     }

//     let needsReview = [];

//     for (let i = 0; i < averages.length; i++) {
//         if (averages[i] < threshold) needsReview.push(i);
//     }

//     return needsReview;
// }

// ------ Refactored ------
function ratingThreshold(threshold: number, ratings: number[][]): number[] {

    let allRatings: number[] = [], averages: number[] = [], needsReview: number[] = [];
    let sum: number = 0, numOfReviews: number = 0;

    for (let i = 0; i < ratings.length; i++) {
        allRatings.push(...ratings[i], -9999);
    }
    
    for (let i = 0; i < allRatings.length; i++) {
        if (allRatings[i] === -9999) {
            averages.push(sum / numOfReviews);
            sum = 0;
            numOfReviews = 0;
        } else {
            sum += allRatings[i];
            numOfReviews++;
        }
    }

    for (let i = 0; i < averages.length; i++) {
        if (averages[i] < threshold) needsReview.push(i);
    }

    return needsReview;
}

console.log(ratingThreshold(3.5, [[3,4],[3,3,3,4],[4]]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number and an array of numbers, determine if any
         of the numbers in the array average below the given number and
         return the index.
    b. What are the inputs that go in the problem?
        -a number, a mulitidimensional array of numbers
    c. What are the outputs that should come from the problem?
        -an array of numbers
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -threshold, ratings, average
2. Explore concrete examples.
    -(3.5, [[3,4],[3,3,3,4],[4]]) returns [1]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(n^2) Quadratic time to O(3n) Linear Time
    -Made use of the spread operator.
    -added TypeScript Syntax
    -Made use of declaring multiple variables on one line.

*/


