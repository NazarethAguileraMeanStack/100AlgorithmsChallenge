/*
46. Even Digits Only

-Check is all digits in a given integer are even.

n = 248622, output should be true.
n = 642386, output should be false.

*/

function evenDigitsOnly(num){

    let testNum = num.toString().split("");
    for (let i = 0; i< testNum.length; i++){
        if(parseInt(testNum[i]) % 2 != 0){
            return false;
        }
    }
    return true;

}


console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));