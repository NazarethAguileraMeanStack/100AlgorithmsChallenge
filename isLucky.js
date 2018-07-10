/*

66. Is Lucky

-Ticket number usually consist of an even number of digits. A ticket number is considered lucky if the sum
of the first half of the digits is equal to the sum of the second half.

Given a ticket Number n, determine if the ticket is lucky or not.

n = 1230, output should be true.

n = 239017, output should be false.

*/


function isLucky(num){

    let stringNum = num.toString();

    let firstHalf = stringNum.substring(0, (stringNum.length / 2)).split("");
    let secondHalf = stringNum.substring(stringNum.length/2).split("");

    let firstHalfTotal = 0;
    let secondHalfTotal = 0;
    for (let i = 0; i < firstHalf.length; i++){
        firstHalfTotal += parseInt(firstHalf[i]);
        secondHalfTotal += parseInt(secondHalf[i]);
    }

    return firstHalfTotal == secondHalfTotal;



}

console.log(isLucky(1230));
console.log(isLucky(239017));