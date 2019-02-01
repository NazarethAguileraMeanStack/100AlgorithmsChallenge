/*

Problem 37.

The algorithm to convert Celsius to Fahrenheit is the temperature
in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the
variable fahrenheit already defind and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature. Use the algorithm mentioned above
to help convert the Celsius temperature to Fahrenheit.

Don't worry too much about the function and return statements as they will be covered
in future challengers. For now, only use operators you have already learned.


*/

// ------ Original Way of Solving ------
// function convertCelsiusToFahrenheit(celsius: number): number {
//     return (celsius * (9 /5)) + 32;
// }

// ------ Refactored -------

function convertCelsiusToFahrenheit(celsius) {
    let WeatherMachine = function(celsius) {
        this.celsius = celsius;
        this.fahrenheit = 0;
    }

    WeatherMachine.prototype.convertToFahrenheit = function() {
        this.fahrenheit = (this.celsius * (9/5)) + 32;
    }
    WeatherMachine.prototype.getFahrenheit = function() {
        return this.fahrenheit;
    }

    let weatherMachineTester = new WeatherMachine(celsius);
    weatherMachineTester.convertToFahrenheit();

    return weatherMachineTester.getFahrenheit();
}

console.log(convertCelsiusToFahrenheit(-30));
console.log(convertCelsiusToFahrenheit(-10));
console.log(convertCelsiusToFahrenheit(0));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number on the celsius scale, return
         the equivalent number on the fahrenheit scale.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -You may need to look up the conversion from celsius
         to fahrenheit
    e. How should i label important pieces of data?
        -celsius, fahrenheit
2. Explore concrete examples.
    (-30) returns -22;
    (-10) returns 14;
    (0) returns 32
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    *******NOTE: Given the simplicity of the original
                 way of solving, the refactored version
                 is just for fun. You should do the first
                 approach.

*/

