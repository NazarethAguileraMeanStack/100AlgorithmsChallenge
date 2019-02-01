/*
42. Digit Degree

-Let's define digit degree of some positive integer as the number of times we need to replace
this number witht he sum of its digits until we got to one digit number.
-Given an integer,find its digit degree.

EXAMPLE:

for n = 5, output should be -/
n= 100, output should be 1. (1 + 0 + 0).
n = 91, outpust should be 2. (9 + 1 = 10)(1 + 0 = 1)

*/

function digitDegree(num){
    let stringNum = num.toString().split("");
    let total = 0;
    let counter = 1;

    for (let i = 0; i < stringNum.length; i++){
        total += parseInt(stringNum[i]);
    }


    if(total >= 9){
        return counter + digitDegree(total);
    } else {
        return counter;
    }

        

}

console.log(digitDegree(5));
console.log(digitDegree(91));
console.log(digitDegree(100));
console.log(digitDegree(101));
console.log(digitDegree(1234567));