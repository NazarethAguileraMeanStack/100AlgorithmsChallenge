/*
28. Chunky Monkey

-Write a function that splits an array into groups the length of size
of the second argument, and returns them as a two-dimensional array.

EXAMPLE:
["a", "b", "c", "d"], 2; should return [["a", "b"], ["c", "d"]]

[0,1,2,3,4,5] , 4; should return [[0,1,2,3], [4,5]]

*/



function chunkyMonkey(arr, sizeOfArray){
    let counter = 0;
    let newArray = [];
    let miniArray = [];
    while (counter != arr.length){
        miniArray.push(arr[counter]);
        if (miniArray.length == sizeOfArray || arr[counter + 1] == undefined){
            newArray.push(miniArray);
            miniArray = [];
        }
        counter++;
    }

    return newArray;
}


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0,1,2,3,4,5], 4));