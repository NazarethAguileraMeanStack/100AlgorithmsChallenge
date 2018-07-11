/*

94. Sum All Odd Fibonacci Numbers

-Given a positive integer num, return the sum of all 
fibonacci numbers that are less than or equal to the num.

the first two numbers in the fibonacci sequence are 1 and 1, every additional number
in the sequence is the sum of the two previous numbers.
The first six numbers are 1,1,2,3,5, and 8.

For example:

sumFibs(10) should return 10 because all odd fibonacci numbers less than 10 are 1,1,3 and 5.

*/

function sumAllOddFibonacciNumbers(num){
    
    let fib = [];
    
    fib[0] = 1;
    fib[1] = 1;
    for(let i = 2; i < num; i++)
    {
        if( fib[i-2] + fib[i-1] > num){
            break;
        } else{
            fib[i] = fib[i-2] + fib[i-1];
        }
    }

    return fib.filter((element)=>{return element % 2 != 0}).reduce((total, element)=>{return total += element});

}


console.log(sumAllOddFibonacciNumbers(10));