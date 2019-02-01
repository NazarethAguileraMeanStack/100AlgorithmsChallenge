/*

Problem 70. Late Ride

One night you go for a ride on your motorcycle. At 00:00 you start
your engine, and the built-in timer automatically begins counting the
length of yoyur ride, in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize, there's a chance the bridges on your
route home are up, leaving you stranded! Unfortunately, you don't have your watch
on you and don't know what time it is. All you know thanks to the bike's timer is that
n minutes have passed since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of digits
that the digital timer in the format hh:mm would show.


*/


// ------ Original Way of Solving -------

// function lateRide(numOfMinutes) {

//     let digitHours = Math.floor(numOfMinutes / 60);
//     let digitMinutes = numOfMinutes % 60;
    
//     let time = digitHours.toString() + digitMinutes.toString();

//     let sumTime = 0;

//     for (let i = 0; i < time.length; i++) {
//         sumTime += parseInt(time[i]);    
//     }

//     return sumTime;
// }


// ------ Refactored ------

function lateRide(numOfMinutes: number): number {

    let digitHours: number = Math.floor(numOfMinutes / 60);
    let digitMinutes: number = numOfMinutes % 60;
    let time: string[] = (digitHours.toString() + digitMinutes.toString()).split('');
    let sum: number = 0;

    time.forEach((element) => { sum += parseInt(element)});
    return sum;
    
}

console.log(lateRide(240));
console.log(lateRide(808));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given a number, break that number into time format,
         then add the digits of the time formatted number together.
    b. What are the inputs that go in the problem?
        -a number
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, but it helps to know 60 minutes are 1 hour of time.
    e. How should i label important pieces of data?
        -time, numOfMinites
2. Explore concrete examples.
    (240) returns 4.
    (808) returns 14.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time
    -added TypeScript Syntax.
    -changed for-loop to forEach for readability.
*/
