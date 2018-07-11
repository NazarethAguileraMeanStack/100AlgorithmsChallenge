/*

95. Square Digital Sequence

-Consider a sequence of numbers a0, a1, a2,....an, in which an element is equal to the sum
of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

EXAMPLE:

a0 = 16; the output should be 9.

Here's how elements in the sequence are constructed.

a0 = 16.

a1 = 1^2 + 6^2 = 37.
a2 = 3^2 + 7^2 = 58.
a3 = 5^2 + 8^2 = 89.
a4 = 8^2 + 9^2 = 145.
a5 = 1^2 + 4^2 + 5^2 = 42.
a6 = 4^2 + 2^2 = 20.
a7 = 2^2 + 0^2 = 4.
a8 = 4^2 = 16, which has already been called before a0.

Thus there are 9 elements in the sequence.

for a0 = 103, the output should be 4.

thus the sequence goes: 103 -> 10 -> 1 -> 1,4 elements together

*/


function squareDigitalSequence(num){

    let sequence = [];
    sequence.push(num);
    let doubles = false;
    let i = 0;
    let nextValue = "";
    let total = 0;

    while (doubles == false){
        nextValue = sequence[i].toString().split("");
        for (let j = 0; j < nextValue.length; j++){
            total += Math.pow(parseInt(nextValue[j]), 2)
        }
        if (sequence.includes(total)){
            sequence.push(total)
            doubles = true;
        } else {
            sequence.push(total);
            i++;
            total = 0;
        }
    }
    return sequence.length;

}

console.log(squareDigitalSequence(16));
console.log(squareDigitalSequence(103));