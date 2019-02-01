/*

58. Flatten Array

-Flatten a nested Array. You must account for varying levels of nesting.

EXAMPLE:

steamRollArray([[["a"]], [["b"]]]); should return ["a", "b"].

steamRollArray([1, [2], [3, [[4]]]]); should return [1,2,3,4]


*/



function steamRollArray(arr){


    let contents = [];
    flatten(arr);

    function flatten(arr){
        arr.forEach((element)=>{
            if (Array.isArray(element)){
                flatten(element);
            } else {
                contents.push(element);
            }
        });
    }

    return contents;
}


console.log(steamRollArray([[["a"]], [["b"]]]));
console.log(steamRollArray([1, [2], [3, [[4]]]]));