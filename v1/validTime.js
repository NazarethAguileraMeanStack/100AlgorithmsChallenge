/*

100. Valid Time

-Check if the given string is a correct time prepresentation of a 24-hour clock.

EXAMPLE:

For time = "13:58", output should be true;
for time = "25:51", output should be false;
for time = "02:76", output should be false;

*/


function validTime(timeString){

    let testTime = timeString.split(":");
    if(parseInt(testTime[0]) >= 24 || parseInt(testTime[0]) < 0){
        return false;
    }
    if (parseInt(testTime[1]) >= 60 || parseInt(testTime[1] < 0)){
        return false;
    }

    return true;

}


console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));