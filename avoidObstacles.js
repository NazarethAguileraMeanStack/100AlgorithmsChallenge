/*
19. Avoid Obstacles

-You are given an array of integers representing coordinates of obstacles situated on a straight line.
-Assume that you are jumping from point with coordinate 0 to the right. You are allowed to only make
jumps of the same length represented by some integer.
-Find the minimal length of the jump enough to avoid all obstacles.

Example:

inputArray[5,3,6,7,9], the output should be 4

0 1 2 3 4 5 6 7 8 9 10 etc...

good points to land on are 0 1 2 4 8 10 etc...
bad points to land on are 3 5 6 7 9


*/


function avoidObstacles(arr){
    let counter = 0;
    let modNum = 1;
    while (counter != arr.length){
        counter = 0;
        modNum++;
        for(let i = 0; i < arr.length;i++){
            if (arr[i] % modNum != 0){
                counter++;
            }
        }
    }

    return modNum;
}

console.log(avoidObstacles([5,3,6,7,9]));
console.log(avoidObstacles([3,7,8,9]));
console.log(avoidObstacles([1,3,5,7,9]));