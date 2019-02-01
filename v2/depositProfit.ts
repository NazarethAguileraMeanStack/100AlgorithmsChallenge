/*

Problem 40.

You have deposited a specific amount of dollars into your bank account.
Each year, your balance increases at the same growth rate. Find out how long
it would take for your balances to pass a specific threshold with the 
assumption that you don't make any additional deposits.

*/


// ------ Original Way of Solving -------

// function depositProfit(deposit, rate, threshold) {

//     let years = 0;
//     let initalDeposit = deposit;
//     let annualRate = rate / 100;

//     while (initalDeposit < threshold) {
//         initalDeposit += initalDeposit * annualRate;
//         years++;
//     }

//     return years;
// }

function depositProfit(deposit: number, rate: number, threshold: number): number {

    let years = 0;

    while (deposit < threshold) {
        deposit += deposit * (rate / 100);
        years++;
    }

    return years;
}
console.log(depositProfit(100, 20, 170));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given three numbers: a start, a rate, and an end,
         determine how many cycles the the start needs to 
         increase by the rate before it is higher than the
         end number.
    b. What are the inputs that go in the problem?
        -three numbers: deposit, rate, threshold
    c. What are the outputs that should come from the problem?
        -A number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resouces needed.
    e. How should i label important pieces of data?
        -deposit, rate, threshold, years
2. Explore concrete examples.
    (100,20,170) returns 3
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -O(n) Linear Time
    -removed unnecessary varialble declarations.
    -added TypeScript Syntax.

*/


