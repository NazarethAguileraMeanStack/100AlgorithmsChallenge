/*

73. Make Array Consecutive 2

-Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue
having an non-negative size. Since he likes to make things perfect, he wants to arrange them from smallest
to largest so that each statue so that each statue will be bigger than the previous one exactly by 1. He may need
some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

EXAMPLE:

for statues = [6,2,3,8], the output should be makeArrayConsecutive2() = 3.

Ratiorg needs statues of sizes 4,5 and 7.

*/

function makeArrayConsecutive2(arr){

    let testArray = arr.sort();
    let missingArray = [];

    for (let i = testArray[0]; i < testArray[testArray.length - 1]; i++){
        if(!testArray.includes(i)){
            missingArray.push(i);
        }
    }


    return missingArray.length;


}

console.log(makeArrayConsecutive2([6,2,3,8]));
console.log(makeArrayConsecutive2([3,5,7,2,1]));