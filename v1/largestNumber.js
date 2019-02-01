/*

69. Largest Number

EXAMPLE:

for n = 2, output should be largestNumber(n) = 99;

*/



function largestNumber(num){

    let bigNum = "";

    for (let i = 0; i < num; i++){
        bigNum += "9";
    }

    return parseInt(bigNum);

}

console.log(largestNumber(1));
console.log(largestNumber(2));
console.log(largestNumber(3));
console.log(largestNumber(4));