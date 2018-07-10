/*

60. House Number Sum

-A boy is walking a long way home from school. To make the walk more fun, he decides to add up all the number
of houses that he passes by during his walk. Unfortunately, not all the houses have numbers written on them, and top
of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order..

At some point during the walk, the boy encounters a house with number 0 written on it, which surprises him so myuch that he stops
adding numbers to his total after seeing that house.

For the given sequence of houses, determine the sum that the boy will get. It is guranteed that there will always be at least one 0 house
on the path.

EXAMPLE:

array[5,1,2,3,0,1,5,0,2]; output should be 11.

5 + 1 + 2 + 3 = 11.

*/


function houseNumber(arr){

    let houses = arr.sort();
    let uniqueHouses = [];

    for (let i = 0; i < arr.length; i++){
        if (houses[i] != houses[i + 1]){
            uniqueHouses.push(houses[i])
        }
    }

    return uniqueHouses.reduce((total, element)=>{return total += element});

}


console.log(houseNumber([5,1,2,3,0,1,5,0,2]));