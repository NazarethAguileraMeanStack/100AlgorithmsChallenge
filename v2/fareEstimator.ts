/*

51. Fare Estimator

-Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. 
It works by passing approximated ride distance and ride time thorugh this formula:

(Cost per minute) * (ride time) + (Cost per mile) * (Ride distance)

where cost per minute and cost per mule depend on the car type.
You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, 
as well as ride distance and time, return the fare estimates for all car types.




*/

// ------ Original Way of Solving ------

// function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {

//     let totalArray = [];

//     for (let i = 0; i < costPerMile.length; i++) {
//         totalArray.push(((costPerMinute[i] * rideTime) + ( costPerMile[i] * rideDistance)) * 100 / 100 );
//     }

//     return totalArray;
// }

// ------ Refactor -------

function fareEstimator(...arr): number[] {
    return arr[arr.length - 1].map((element, index) => { return (arr[0] * arr[2][index] + arr[1] * arr[3][index]) * 100 / 100});
}

console.log(fareEstimator(30, 7, [0.2,0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given some distamce and time, find the output of various
         options represetned by costPerMinute and costPerMile
    b. What are the inputs that go in the problem?
        -a number, a number, an array of numbers, an array of numbers.
    c. What are the outputs that should come from the problem?
        -An Array of numbers.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
        -rideTime, rideDistance, costPerMinute, costPerMile, totalArray
2. Explore concrete examples.
    ride_time = 30, ride_distance = 7, cost_per_minute = [0.2,0.35, 0.4, 0.45], and cost_per_mile = [1.1, 1.8, 2.3, 3.5], 
    the output should be fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) linear time.
    -Removed unnecessary array delcaration.
    -swapped to a .map method from for-loop.
    -added TypeScript Syntax.
    -One line of code!!!

*/