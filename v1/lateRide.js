/*

70. Late Ride

-One night you go for a ride on your motorcycle. At 00:00 you start your engine and the built-in timer
automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a change the bridges on your routes home are up, leaving you stranded!
Unfortunately, you don't have your watch on your and don't know what the time is. All you know is thanks to the bike's timer,

is that amount of minutes since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of the digits that the digital timer
would show.

EXAMPLE:

for n = 240, output should be 4.

Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0+4+0+0 = 4 which is the answer.

for n = 808, the output should be 14.

808  minutes means that 13:28 now, so the answer should e 1 + 3 + 2 + 8 = 14.

*/


function lateRide(minutesPassed){
    let time =  (minutesPassed / 60).toFixed(2).split(".");
    let secondHalf = Math.floor((parseInt(time[1]) * .60)).toString();
    let firstHalfTotal = 0;
    let secondHalfTotal = 0;

    let firstHalf = time[0].split("");

    for (let i = 0; i < secondHalf.length; i++){
        firstHalfTotal += parseInt(firstHalf[i]);
        secondHalfTotal += parseInt(secondHalf[i]);
    }

    return firstHalfTotal + secondHalfTotal;

}

console.log(lateRide(240));
console.log(lateRide(808));