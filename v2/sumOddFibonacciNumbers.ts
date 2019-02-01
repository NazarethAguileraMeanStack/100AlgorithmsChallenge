/*

Problem 94. Sum Odd Fibonacci Numbers

Given a positive integer num, return the sum of all 
fibonacci numbers that are less than or equal to the num.
the first two numbers in the fibonacci sequence are 1 and 1, every additional number
in the sequence is the sum of the two previous numbers.
The first six numbers are 1,1,2,3,5, and 8.

*/

// ----- Original Way of Solving -------

// function sumAllOddFibonacciNumbers(num){
    
//     let fib = [];
    
//     fib[0] = 1;
//     fib[1] = 1;
    
//     for(let i = 2; i < num; i++) {

//         if( fib[i-2] + fib[i-1] > num){
//             break;
//         } else{
//             fib[i] = fib[i-2] + fib[i-1];
//         }
//     }

//     return fib.filter((element)=>{return element % 2 != 0}).reduce((total, element)=>{return total += element});

// }

function sumAllOddFibonacciNumbers(num: number): number {
    
    let fib: number[] = [1,1];
    
    for(let i = 2; i < num; i++) {
        if( fib[i-2] + fib[i-1] > num) break;
        fib[i] = fib[i-2] + fib[i-1];
    }

    return fib.filter((element)=>{return element % 2 != 0}).reduce((total, element)=>{return total += element});

}

console.log(sumAllOddFibonacciNumbers(10));
console.log(sumAllOddFibonacciNumbers(1000));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number, find the sum of all odd fibonacci numbers
         up to that number.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, but you should know how fibonacci numbers work
    e. How should i label important pieces of data?
        -fib
2. Explore concrete examples.
    (10) should return 10 because all odd fibonacci numbers less than 10 are 1,1,3 and 5.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -kept O(n) linear time.
    -added TypeScript Syntax.
    -made use of single line if-statement.
    -grouped array initialization.


*/


