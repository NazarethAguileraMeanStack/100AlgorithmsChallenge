/*
51. Fare Estimator

-Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. 
It works by passing approximated ride distance and ride time thorugh this formula:

(Cost per minute) * (ride time) + (Cost per mile) * (Ride distance)

where cost per minute and cost per mule depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, 
as well as ride distance and time, return the fare estimates for all car types.

ride_time = 30, ride_distance = 7, cost_per_minute = [0.2,0.35, 0.4, 0.45], and cost_per_mile = [1.1, 1.8, 2.3, 3.5], 
the output should be fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].


*/


function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile){
    let estimates = [];
    for (let i = 0; i < cost_per_mile.length; i++){
        estimates.push((cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance).toFixed(1));
    }

    return estimates;
}

console.log(fareEstimator(30,7, [0.2,0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
console.log(fareEstimator(20,18, [0.2,0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
console.log(fareEstimator(10,9, [0.2,0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
