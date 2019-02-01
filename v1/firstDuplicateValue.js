/*
56. First Duplicate Value

-Given an array a that contians only numbers in the range from 1 to a.length, find the first duplicate number for which
the second occurence has the minimal index. In other words, if there are more than 1 duplicated number, return the number for which the
second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

EXAMPLE:

a = [2,1,3,5,3,2], the output should be 3.

There are two duplicates: numbers 2 and 3, The second occurrence of 3 has a smaller index than the second occurrence of 2, so the answer is 3.

a = [2,4,3,5,1], the output should be -1.

*/


function firstDuplicate(arr){

    let indexArray = [];
    let smallestNums = [];
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                indexArray.push([i, j]);
            }
        }
    }

    if (indexArray.length == 0){
        return -1;
    } else{
        for (let i = 0; i < indexArray.length; i++){
            smallestNums.push(indexArray[i][1]);
        }
        return arr[indexArray[smallestNums.indexOf(Math.min(...smallestNums))][0]];
        
    }

}

console.log(firstDuplicate([2,1,3,5,3,2,2]));
console.log(firstDuplicate([2,4,3,5,1]));