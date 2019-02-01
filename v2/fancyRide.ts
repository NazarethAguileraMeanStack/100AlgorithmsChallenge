/*

Problem 50. Fancy Ride

Being a new Uber user, you have $20 off your first ride.
You want to make the most out of it and drive in the fanciest
car you can afford, without spending any out-of-pocket money.
There are 5 options, from least to the most expensive:

'UberX'   - 'UberXL'   - 'UberPlus'  - 'UberBlack'  - 'UberSUV'
$.30/mile   $.50/mile    $.70/mile     $1.00/mile     $1.30/mile      

You know the length l of your ride in miles, and how much one mile
costs for each car. Find the best one you can afford.


*/

// ------ Original Way of Solving ------

// function fancyRide(l, fares) {
//     let options = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
//     let prices = [];
//     for (let i = 0; i < fares.length; i++) {
//         prices.push(fares[i] * l);
//     }

//     let possibleOptions = prices.filter((element) => { return element < 20}).length;

//     return options[possibleOptions - 1];

// }

// ------ Refactored ------

function fancyRide(miles: number, fares: number[]): string {
    let options: string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'], limit: number = 20;
    
    return options[fares.filter((element) => { return element * miles < limit }).length - 1];

}

console.log(fancyRide( 30 ,[0.3, 0.5, 0.7, 1.0, 1.3]));
console.log(fancyRide( 20 ,[0.3, 0.5, 0.7, 1.0, 1.3]));
console.log(fancyRide( 10 ,[0.3, 0.5, 0.7, 1.0, 1.3]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Find the highest option without going over
         the limit of 20.
    b. What are the inputs that go in the problem?
        -a number, and an array of numbers.
    c. What are the outputs that should come from the problem?
        -a string
    d. Can the outputs be determined from the inputs?
        -Yes, but you will need the setup prompt for this question.
    e. How should i label important pieces of data?
        -bestOption, options
2. Explore concrete examples.
    (30, [0.3, 0.5, 0.7, 1.0, 1.3]) returns 'UberXL'
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -Removed unnecessary variable declarations.
    -added TypeScript Syntax.
    -Removed unnecessary for-loop.
*/

