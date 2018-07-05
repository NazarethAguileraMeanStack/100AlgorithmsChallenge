/*

***THIS IS A GOOGLE TEST QUESTION


33. Compose Ranges

-Given a sorted integer array that does not contain any duplicates,
return a summary of the number ranges it contains.

EXAMPLE:

nums[-1,0,1,2,6,7,9], output should be ["-1 -> 2", "6 -> 7", "9"]

*/


function composeRanges(arr){
    let stringArray = [];
    let rangesArray = [];
    let minArray = [];
    let counter = 0;

    while(counter != arr.length){
        minArray.push(arr[counter]);
        if(arr[counter + 1] != arr[counter] + 1){
            rangesArray.push(minArray);
            minArray = [];
        }
        counter++;
    }

    for (let i = 0; i < rangesArray.length; i++){
        if (rangesArray[i].length > 1){
            stringArray.push(`${rangesArray[i][0]} -> ${rangesArray[i][rangesArray[i].length - 1]}`);
        }
        if (rangesArray[i].length == 1){
            stringArray.push(`${rangesArray[i][0]}`);
        }
    }

    return stringArray;
}


console.log(composeRanges([-1,0,1,2,6,7,9]));
console.log(composeRanges([0,1,2,3,4,5,6,7,8]));
