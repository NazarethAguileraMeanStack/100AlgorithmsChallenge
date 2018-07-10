/*

61. House of Cats

-There are some people and cats in a house. you are given the number of legs they all have together.
Your task is to return an array containing every possible number of people that could be in the house sorted in 
ascending order. Its guranteed that each person has 2 legds and each cat has 4 legs.

EXAMPLE:

for legs = 6, output should be [1,3]

There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6)

for legs = 2; output should be [1]

There can only be one person.

*/


function houseOfCats(numOfLegs){

    let maxNumOfHumans = [];

    removeCats(numOfLegs);

    function removeCats(numOfLegs){
        if (Math.floor(numOfLegs / 2) > 1){
            maxNumOfHumans.push(Math.floor(numOfLegs / 2));
            return removeCats(numOfLegs - 4);
        } else {
            return maxNumOfHumans.push(numOfLegs / 2);
        }
    }


    return maxNumOfHumans.sort();


}


console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(8));
console.log(houseOfCats(10));