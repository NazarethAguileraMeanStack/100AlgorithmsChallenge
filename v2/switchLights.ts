/*

96. Switch Lights

N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied:
if the obersved candle is lit, then state of this candle and all candles before it are changed to the opposite.
Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?


*/


// ------ Original Way of Solving ------

// function switchLights(arr){

//     let candles = arr;

//     for(let i = 0; i < candles.length; i++){

//         if (candles[i] == 1){

//             for (let j = 0; j < i; j++){
//                 if(candles[j] == 1){
//                     candles[j] = 0;
//                 } else {
//                     candles[j] = 1;
//                 }
//             }

//         } else {
//             continue;
//         }

//     }

//     return candles;

// }


// ------- Refactored ------

function switchLights(arr: number[]): number[] {

    let numberOfCandlesLit: number = 0;
    let result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) numberOfCandlesLit += 1;
    }

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            numberOfCandlesLit--;
            (numberOfCandlesLit % 2 === 0) ? result.push(1) : result.push(0);
        } else {
            (numberOfCandlesLit % 2 === 0) ? result.push(0) : result.push(1);
        }
    }

    return result;

}

console.log(switchLights([1,1,1,1]));
console.log(switchLights([0,0,0,0,0,1]));
console.log(switchLights([1,1]));
console.log(switchLights([1,0]));
console.log(switchLights([0,1]));






/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given a number array of 0s and 1s. If you hit a 1, change
         all previous values to be the opposite. Iterate through the array
         and determine what the array would look like after finally reaching
         the end of the array.
    b. What are the inputs that go in the problem?
        -an array of numbers.
    c. What are the outputs that should come from the problem?
        -an array of numbers.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -candles
2. Explore concrete examples.
    candles = [1,1,1,1]; output should be switchLights() = [0,1,0,1]
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(n^2) Quadratic Time to O(n) Linear Time
    -Made use of ternary operator.
    -added TypeScript Syntax.
    
*/

