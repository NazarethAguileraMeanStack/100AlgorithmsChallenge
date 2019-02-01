/*

59. Growing Plant

-Each day a plant is growing by upSpeed meters. Each night the plant's height decreases
by downSpeed meters, due to lack of sun heat. Initially the plant is 0 meters. We plant 
the seed at the beginning of a day. We want to know when the height of the plant reaches
a certain level.


EXAMPLE:

upSpeed = 100, downSpeed = 10, and desiredHeight = 910. Output should be 10.

*/


function growingPlant(upSpeed, downSpeed, desiredHeight){
    let days = 0;
    let growth = 0;

    while (growth < desiredHeight){
        days++;
        console.log(growth);
        growth += upSpeed;
        
        if(growth < desiredHeight){
            growth -= downSpeed;
        }
    }

    return days;

}

console.log(growingPlant(100, 10, 910));


