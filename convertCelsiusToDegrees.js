/*
37. Convert Celsius To Fahrenheit

-The algorithm to convert Celsius to Fahrenheit is: Celsius * 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined
and assign it to the fahrenheit equivalent to the given celsius temperature.


EXAMPLE:
celsiusToFahrenheit(-30); returns -22.
celsiusToFahrenheit(-10); returns 14.
celsiusToFahrenheit(0); returns 32.


*/

function celsiusToFahrenheit(celsius){

    let fahrenheit = (celsius * (9/5)) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));


