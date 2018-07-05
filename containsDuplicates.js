/*
36. Contains Duplicates

-Given an array of integers, write a function that determines whether the array contains any duplicates.
Your function should return true if any element appears at least twice in the arry,
and return false if every element is disctinct.

EXAMPLE:
a = [1,2,3,1]; output should be true.

b = [3,1]; output should be false;


*/


function containsDuplicates(arr){
    let sortedArray = arr.sort();
    for (let i = 0; i < sortedArray.length; i++){
        if (sortedArray[i] == sortedArray[i + 1]){
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([0,1,2,3,4,5]));
console.log(containsDuplicates([5,0,1,2,3,4,5]));
