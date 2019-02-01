/*
64.  Integer To String Of Fixed Width

-Given a positive Integer and a certain length, we need to modify the given number to have a specified length.
We are allowed to do that either by cutting out leading digits or by adding 0's in front of the original number.

EXAMPLE:

number = 1234, width = 2, output should be 34.

number = 1234, width = 4, output should be 1234.

number = 1234, width = 5, output should be 01234



*/

function integerToStringOfFixedWidth(digits, width){

    if (digits.length == width){
        return digits;
    }
    else if (digits.length < width){
        return digits.padStart(width, "0");
    }
    else {
        return digits.substr(digits.length - width);
    }

}

console.log(integerToStringOfFixedWidth("1234", 2));
console.log(integerToStringOfFixedWidth("1234", 4));
console.log(integerToStringOfFixedWidth("1234", 5));
console.log(integerToStringOfFixedWidth("1234", 8));