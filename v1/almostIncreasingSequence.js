/*
7. Almost Increasing Sequence

Given a sequence of integers as an array, determine whether its possible
to obtain a strictly increasing sequence by removing no more than one element
from the array.

example:

sequence [1,3,2,1], the output should be false
-there is no one element in this array that can be removed in order to get a strictly increasing sequence

sequence [1,3,2], the output should be true
-You can remove 3 from the array to get the strictly increasing [1,2].
-alternatively, you can remove 2, to get the increasing sequence [1,3].

*/

function almostIncreasingSequence(arr){

    let wrongCounter = 0;

    for (let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            wrongCounter++;
        }
    } 
    
    if (wrongCounter < 2){
        return true;
    } else {
        return false;
    }
}


console.log(almostIncreasingSequence([2,2,3,4,5,6]));
console.log(almostIncreasingSequence([1,2,3,2,1]));
console.log(almostIncreasingSequence([1,3,2]));
console.log(almostIncreasingSequence([1,3,2,1]));