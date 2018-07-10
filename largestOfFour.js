/*

68. Largest of Four

-Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple
loop, and access each array syntax arr[i]

*/


function largestOfFour(arr){

    let largestFour = [];

    for (let i = 0; i < arr.length; i++){
        largestFour.push(Math.max(...arr[i]));
    }

    return largestFour;

}

console.log(largestOfFour([[4,5,1,3],[12,27,18,26],[32,35,37,29],[1000,1001,857,1]]));
console.log(largestOfFour([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]));