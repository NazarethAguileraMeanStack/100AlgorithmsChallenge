/*

71. Launch Sequence Checker

-The master launch sequence consists of serveral independent sequences for different systems.
Your goal is to verify that all the individual system sequences are in strictly increasing order.
In other words, any two elements i and (i < j) of the master launch sequence that belong to the same system,
their values should be in strictly increasing order.

EXAMPLE:

systemNames = ["stage_1", "stage_2", "dragon", "stage_1,", "stage_2", "dragon"] and stepNumbers = [1,10,11,2,12,111], output should be true.

There are three independent sequences for systems "stage_1", "stage_2", and "dragon. these sequences are [1,2], [10,12], and [11,111] respectively.
The elements are in strictly increasing order for all three.

systemNames = ["stage_1", "stage_1", "stage_2", and "dragon"], stepNumbers = [2,1,12,111], output should be false.

There are three independent sequences for systems "stage_1", "stage_2" and "dragon". These sequences are [2,1], [12], and [111] respectively.
In the first sequence, the elements are not ordered properly.


*/


function launchSequenceChecker(arrayOne, arrayTwo){
    let masterArray = [];
    let codeName = "";
    let key = 0;

    for (let i = 0; i < arrayOne.length; i++){
        codeName = arrayOne[i];
        key = arrayTwo[i];
        masterArray.push([codeName, key]);
    }

    for (let i = 0; i < masterArray.length; i++){
        for (let j = i; j < masterArray.length; j++){
            if ( masterArray[i][0] == masterArray[j][0] && masterArray[i][1] > masterArray[j][1] ){
                return false;
            }
        }
    }

    return true;
}


console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1,", "stage_2", "dragon"], [1,10,11,2,12,111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2,1,12,111]));