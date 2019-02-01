/*

****THIS IS A CHALLENGE FROM UBER

50. Fancy Ride

-Being a new Uber user, you have $20 off your first ride. you want to make the most out of it and drive in the fanciest car you can afford,
without spending any out-of-pocket-money. There are 5 options from the least to the most expensive.
"UberX", "UberXL", "UberPlus", "UberBlack", and "UberSUV".

You know the length L of your ride in miles, and how much one mile costs for each car. Find the best car you can afford.

EXAMPLE:

for L = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be fancyRide(L, fares) = "UberXL".
The cost for the ride in this car would be $15, which you can afford, but "UberPlus" would cost $21, which is too much for you.

*/

function FancyRide(L, fares){
    let cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    for (let i = fares.length; i > 0; i--){
        if (L * fares[i] < 20){
            return cars[i];
        }
    }


}

console.log(FancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(FancyRide(20, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(FancyRide(10, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(FancyRide(3, [0.3, 0.5, 0.7, 1, 1.3]));