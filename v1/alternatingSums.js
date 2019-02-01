/*
10. Alternating Sums

-Several people are standing in a row and need to be divided into two teams.
The first person goes into team 1, the second goes to team 2, the third goes
to team 1, and the fourth goes to team 2.

-You are given an array of positive integers, the weights of the people. Return 
an array of two integers, where the first element is the total weight of team 1,
and the second element is the total weight of team 2 after the division is completed.


example:

a = [50,60,60,45,70], the output should be [180,105]


*/


function alternatingSums(arr){
    let result = [];
    let teamOne = [];
    let teamTwo = [];
    let teamOneTotalWeight = 0;
    let teamTwoTotalWeight = 0;


    for (let i = 0; i < arr.length; i += 2){
        let j = [i + 1];
        teamOne.push(arr[i]);
        if (arr[j] != undefined){
        teamTwo.push(arr[j]);
        }
    }

    result.push(teamOneTotalWeight = teamOne.reduce((total, element)=> {return total += element}));
    result.push(teamTwoTotalWeight = teamTwo.reduce((total, element)=> {return total += element}));



    return result;


}


console.log(alternatingSums([1,2,3,4,5,6]));
console.log(alternatingSums([1,2,3,4,5]));
console.log(alternatingSums([50,60,60,45,70]));
console.log(alternatingSums([200,145]));