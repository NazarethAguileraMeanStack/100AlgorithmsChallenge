/*
53. Find Closest Pair

-Given an array of integers numbers, we'd like to find the closest pair of elements that add up to the sum. Return the distance between the closest pair
If there isn't a piar that adds up to the sum, return -1.

EXAMPLE:
numbers[1,0,2,4,3,0] and sum = 5; the output should be 2. 1 and 4 ahve a sum of 5 but 2 and 3 are closer.
numbers[2,3,7], sum = 8, the output should be -1 since no pairs have a sum of 8.

*/


function findClosestPair(arr, sum){
    
    let pairs = [];
    let difference = [];
    
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if(arr[i] + arr[j] == sum){
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    if(pairs.length == 0){
        return -1;
    } else {
        for (let k = 0; k < pairs.length; k++){
            difference.push(Math.abs(pairs[k][0] - pairs[k][1]));
        }
        return pairs[difference.indexOf(Math.min(...difference))];
    }

    return difference;
}

console.log(findClosestPair([1,0,2,4,3,0], 5));
console.log(findClosestPair([2,3,7], 8));