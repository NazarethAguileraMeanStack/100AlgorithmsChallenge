/*
29. Circle of Numbers

-Consider Integer Numbers from 0 to n -1, written down along the circle in such a eay that the distance between any two
neighbouring numbers is equal (not that 0 and n-1 are neightbouring too). Given n and firstNumber, find the number which
is written in the radially opposite position to the firstNumber.

EXAMPLE:

for n = 10 and firstNumber = 2; output should be 7.

*/


function circleOfNumbers(numOfElements, targetNumber){
    let circle = [];

    for(let i =0; i < numOfElements; i++){
        circle.push(i);
    }
    
    let halfway = numOfElements / 2;
    let index = halfway + targetNumber;
    if (index >= numOfElements) {
        index = index - numOfElements;
    }
    let opposite = circle[index];

    return opposite;
}

console.log(circleOfNumbers(10,2));
console.log(circleOfNumbers(10,3));
console.log(circleOfNumbers(10,4));
console.log(circleOfNumbers(10,5));
console.log(circleOfNumbers(10,6));