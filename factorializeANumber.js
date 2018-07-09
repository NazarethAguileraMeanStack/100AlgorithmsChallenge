/*
49. Factorialize A Number

-Return the factorial of the provided Integer.

EXAMPLE: 5! = 1 * 2 * 3 * 4 * 5 = 120

*/


function factorializeANumber(num){
    if (num == 1){
        return 1;
    } else {
        return num * factorializeANumber(num - 1);
    }
}


console.log(factorializeANumber(10));
console.log(factorializeANumber(2));
console.log(factorializeANumber(3));
console.log(factorializeANumber(4));
console.log(factorializeANumber(5));