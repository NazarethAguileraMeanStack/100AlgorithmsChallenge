/*
35. Contains Close Nums

Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array, where nums[i] = nums[2],
and the absolute difference between i and j is less than or equal to k.

EXAMPLE:
-There are two 2's in nums nad the absolute difference ebwteen their positions is exactly 3.

nums = [0,1,2,3,5,2], and k = 2. The output should be false.
**The absolute difference between the positions of the two two's is 3, which is more than k.


*/


function containsCloseNums(arr, difference){
    
    let duplicateNumber = 0;
    let hasDuplicates = false;

    for (let i = 0; i < arr.length; i++){
        let test = arr.filter((element)=>{return element == arr[i]});
        console.log(test);
        if (test.length > 1){
            hasDuplicates = true;
            duplicateNumber = test[0];
            break;
        }
    }
    
    if (hasDuplicates == false){
        return false;
    } else {
        let targetNum = arr.indexOf(duplicateNumber);
        if (arr[targetNum] == arr[targetNum + difference] || arr[targetNum] == arr[targetNum - difference]){
            return true;
        } else {
            return false;
        }
    }

}

console.log(containsCloseNums([0,1,2,3,5,2], 2));
console.log(containsCloseNums([0,1,2,3,5,2], 3));
console.log(containsCloseNums([0,1,2,3,4,5,6,7], 2));