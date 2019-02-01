


/*
1. Absolute Values Sum Minimization

Given a sorted array of integers, find an interger such that the value is the smallest possible
(here abs denotes the absolute value). If there are several possible answers, output the smallest
one.

EX:

a = [2,4,7]; the output should be 4
b = [2,4,7,6]; the output should be 4

*/

function absoluteValueSumMinimization(arr){

    let isEven = arr.length % 2 == 0;

    if (isEven){
        return arr[(arr.length / 2) - 1];
    } else {
        return arr[Math.floor(arr.length / 2)];
    }

}

console.log(absoluteValueSumMinimization([2,4,7]));
console.log(absoluteValueSumMinimization([2,4,7,6]));
console.log(absoluteValueSumMinimization([2,4,7,6,6,8]));