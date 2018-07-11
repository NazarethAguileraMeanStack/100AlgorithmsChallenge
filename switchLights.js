/*

96. Switching Lights

-N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied:
if the obersved candle is lit, then state of this candle and all candles before it are changed to the opposite.
Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?

EXAMPLE:

candles = [1,1,1,1]; output should be switchLights() = [0,1,0,1]


*/


function switchLights(arr){

    let candles = arr;

    for(let i = 0; i < candles.length; i++){

        if (candles[i] == 1){

            for (let j = 0; j < i; j++){
                if(candles[j] == 1){
                    candles[j] = 0;
                } else {
                    candles[j] = 1;
                }
            }

        } else {
            continue;
        }

    }

    return candles;

}

console.log(switchLights([1,1,1,1]));