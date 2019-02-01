/*
5. Adjacent Element Products

Given an array of integers, find the pair of adjacent elements that has the largest
product and return that product

example:

inputArray = [3,6,-2,-5,7,3], output should be 21
7 and 3 produce the largest product

*/

function AdjacentElementProducts(arr){

    let maxNumber = arr[0] * arr[1];

    for (let i = 0; i < arr.length; i++){
        let testNumber = arr[i] * arr[i + 1];
        if (testNumber > maxNumber){
            maxNumber = testNumber;
        }
    }

    return maxNumber;
}


console.log(AdjacentElementProducts([3,6,-2,-5,7,3]));
console.log(AdjacentElementProducts([1,2,3,4]));
console.log(AdjacentElementProducts([1,-2,3,-4]));
console.log(AdjacentElementProducts([-1,-2,0,4]));