/*
4. Add two digits

You are given a two-digit number. Return the sum of its digits.

Example:

addTwoDigits(29) should return 11
addTwoDigits(34) should return 7


*/

function addTwoDigits(number){
    let numArray = [];
    let stringNumber = number.toString();
    
    for (let i = 0; i < stringNumber.length; i++){
        let singleNum = parseInt(stringNumber[i]);
        numArray.push(singleNum);
    }



    return numArray.reduce((total, element)=>{ return total += element});

}


console.log(addTwoDigits(29));
console.log(addTwoDigits(34));
console.log(addTwoDigits(55));
console.log(addTwoDigits(11));

