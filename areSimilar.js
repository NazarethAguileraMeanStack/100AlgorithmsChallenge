/*
12. Are Similar

-Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
-Given two arrays a and b, check whether they are similar.

Example:
a = [1,2,3] and b = [1,2,3], output should be true
The arrays are equal, no need to swap.

a = [1,2,3] and b = [2,1,3], the output should be true
We can obtain b from a by swapping 2 and 1.

a = [1,2,2] and b = [2,1,1], the output should be false.
Any swap of any two elements either in a or b won't make a and b equal.

*/


function areSimilar(arrayOne, arrayTwo){
    let testArrayOne = arrayOne.sort();
    let testArrayTwo = arrayTwo.sort();

    for (let i = 0; i < arrayOne.length; i++){
        if (testArrayOne[i] !== testArrayTwo[i]){
            return false;
        }
    }

    return true;


}


console.log(areSimilar([1,2,3],[1,2,3]));
console.log(areSimilar([1,2,3],[2,1,3]));
console.log(areSimilar([1,2,2],[2,1,1]));



