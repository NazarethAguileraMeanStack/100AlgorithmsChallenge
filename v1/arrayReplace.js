/*
18. Array Replace

-Given an array of integers, replace all the occurrences of elemToReplace with subSititionElem.

Example:
inputArray[1,2,1], elemToReplace = 1, substitutionElem = 3
the output should be [3,2,3]

*/


function arrayReplace(arr, elemToReplace, subStitutionElem){

    for (let i = 0; i < arr.length; i++){
        if(arr[i] == elemToReplace){
            arr[i] = subStitutionElem;
        }
    }

    return arr;
}


console.log(arrayReplace([1,2,1], 1, 3));
console.log(arrayReplace([1,1,1,1,1], 1, 5));
console.log(arrayReplace([1,2,3,4,5], 3, 99));