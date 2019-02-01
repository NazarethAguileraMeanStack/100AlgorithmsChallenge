/*
13. Array Change

-You are given an array of integers. On each move, you are allowed to increase
exactly one of its elements by one. Find the minimum number of moves required to obtain
a strictly increasing sequence from the input.

Example:

inputArray = [1,1,1], the output should be 3.



*/

function arrayChange(arr){
    let counter = 0;

    for (let i = 0; i < arr.length - 1; i++){
        let j = arr[i + 1];
        while (j <= arr[i]){
            counter++;
            j = j + 1;
        }
        arr.splice(i + 1,1,j);
    }

    return counter;

}

console.log(arrayChange([1,1,1]));
console.log(arrayChange([1,1,1,1]));
console.log(arrayChange([1,0,2,8,9,0]));
console.log(arrayChange([3,2,1]));