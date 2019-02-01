/*
16. Array Maximal Adjacent Difference

-Given an array of integers, find the maximal absolute difference between
any two of its adjacent elements.

Example:
inputArray[2,4,1,0]; the output should be 3.


*/


function arrayMaximalAdjacentDifference(arr){
    let differenceArray = [];
    for (let i = 0; i < arr.length - 1; i++){
        differenceArray.push(Math.abs(arr[i] - arr[i + 1]));
    }

    return differenceArray.sort((a,b)=>{return b > a})[0];
}


console.log(arrayMaximalAdjacentDifference([2,4,1,0]));
console.log(arrayMaximalAdjacentDifference([1,-2,3,-5,6]));
console.log(arrayMaximalAdjacentDifference([1,-2,3,-7,9]));
console.log(arrayMaximalAdjacentDifference([1,2,-4,5,-7,3,-4,-3,-9,1]));