/*
47. Extract Each Kth

-Given an Array of Integers, remove each Kth element from it.

EXAMPLE:
inputArray[1,2,3,4,5,6,7,8,9,10] and k = 3; outpush should be [1,2,4,5,7,8,10]

*/



function extractEachKth(arr, k){
    let testArr = [];

    for (let i = 0; i < arr.length;i++){
        if ((i + 1) % k != 0){
            testArr.push(arr[i]);
        }
    }

    return testArr;
}


console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 3));
console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 4));
console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 5));