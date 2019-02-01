/*
15. Array Max Consecutive Sum

-Given an array of integers, find the maximal possible sum of some of its k consectutive elements.

Example:

inputArray[2,3,5,1,6] and k = 2; output should be 8. All possible consective sum elements are:
~ 2 + 3 = 5;
~ 3 + 5 = 8;
~ 5 + 1 = 6;
~ 1 + 6 = 7;

The answer is 8.

*/

function arrayMaxConsecutiveSum(arr, numOfElements){
    let sumArray = [];
    for (let i = 0; i < arr.length - 1; i++){
        let total = 0;
        for (let j = i; j < (i + numOfElements); j++){
            if (arr[j] != undefined){
            total += arr[j];
            console.log(j);
            }
        }
        sumArray.push(total);
    }

    return sumArray.sort(((a,b) =>{ return a < b}))[0];
}

console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 2));
console.log(arrayMaxConsecutiveSum([1,2,3,4,5], 2));
console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 3));
console.log(arrayMaxConsecutiveSum([1,2,3,4,5], 3));