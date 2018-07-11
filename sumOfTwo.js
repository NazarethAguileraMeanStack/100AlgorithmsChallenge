/*

****This is a challenge question from Google

97. Sum Of Two

-You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers,
where one number is taken from a and other from b, that can be added together to get sum of v.
Return true is such pair exists, otherwise, return false.

EXAMPLE:

a = [1,2,3], b = [10,20,30,40], v = 42. The output should be sumOfTwo() = true.


*/


function sumOfTwo(arrayOne, arrayTwo, target){

    let biggerIntArray = [];
    let smallerIntArray = [];
    let possibleSums = [];

    if(arrayOne.length >= arrayTwo.length){
        biggerIntArray = arrayOne;
        smallerIntArray = arrayTwo;
    } else {
        biggerIntArray = arrayTwo;
        smallerIntArray = arrayOne;
    }

    for(let i = 0; i < biggerIntArray.length; i++){
        for(let j = 0; j < smallerIntArray.length; j++){
            possibleSums.push(biggerIntArray[i] + smallerIntArray[j]);
        }
    }

    if (possibleSums.includes(target)){
        return true;
    } else {
        return false;
    }
    

}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));