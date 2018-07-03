/*
14. Array Conversion

-Given an array of 2k integers (for some integer k,) perform the following operations
until the array contains only one element.
-On the 1st, 3rd, 5th, etc, iterations (1-based), replace each pair of consecutive elements
with their sum.
-On the 2nd, 4th, 6th, etc, iterations, replace each pair of consecutive elements with their
products. After the algorithm has finished, there will be a single element left in the array.
Return that element.

Example:
-input [1,2,3,4,5,6,7,8] output should be 186.
[1,2,3,4,5,6,7,8] --> [3,7,11,15] --> [21,165] --> [186]


*/


function arrayConversion(arr){
    
    let counter = 0;
    while(arr.length > 1){
        if (counter % 2 == 0){
            for(let i = 0; i < arr.length; i += 1){
                arr.splice(i, 2, (arr[i] + arr[i + 1]));
            }
            counter++;
        } else {
            for (let j = 0; j < arr.length; j +=1){
                arr.splice(j, 2, (arr[j] * arr[j + 1]));
            }
            counter++;
        }
        console.log(arr);



    }
    return arr[0];


}


console.log(arrayConversion([1,2,3,4,5,6,7,8]));

