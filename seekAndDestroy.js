/*

87. Seek and Destroy

-You will be provided with an initial array, followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguements.


EXAMPLE:

seekAndDestroy([3,5,1,2,2], [2,3,5]); should return [1]
seekAndDestroy([1,2,3,5,1,2,3], [2,3]); should return [1,5,1]

*/


function seekAndDestroy(arr, targets){
    

    let testArray = arr;

    for (let i = 0; i < targets.length; i++){
        testArray = testArray.filter((element)=>{return element != targets[i]});
    }

    return testArray;
    
}

console.log(seekAndDestroy([3,5,1,2,2], [2,3,5]));
console.log(seekAndDestroy([1,2,3,5,1,2,3], [2,3]));
console.log(seekAndDestroy([1,1,1,1,1,1,1,2], [1]));