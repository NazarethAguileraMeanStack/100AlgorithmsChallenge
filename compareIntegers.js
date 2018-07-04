/*
32. Compare Integers

-Compare two integers given as strings.

EXAMPLE:

a = "12" and b ="13", output should be Less.

a = "875" and b = "799", output should be Greater.

a = "1000" and b = "1000", output should be equal.


*/


function compareIntegers(num1, num2){
    let intOne = parseInt(num1);
    let intTwo = parseInt(num2);

    if (intOne > intTwo){
        return "Greater";
    } else if (intOne < intTwo){
        return "Less";
    } else {
        return "Equal";
    }
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));