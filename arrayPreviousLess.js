/*
17. Array Previous Less

-Given an array of integers, for each position i, seach among the previous positions for the last (from the left)
position that contains a smaller value. Store this value at position i in the answer. If no such value can be found,
store -1 instead.

Example:

items[3,5,2,4,5]; output should be [-1,3,-1,2,4]

*/


function arrayPreviousLess(arr){
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i - 1] < arr[i]){
            result.push(arr[i - 1]);
        } else {
            result.push(-1);
        }
    }

    return result;
}


console.log(arrayPreviousLess([3,5,2,4,5]));
console.log(arrayPreviousLess([1,2,3,4,5,1]));