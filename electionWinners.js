/*
44. Election Winners

-Elections are in Progress!
-Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who hasn't cast their vote yet,
find the number of candidates who still have a chance of winning the election.

-The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume
there is no winner at all.

EXAMPLE:
votes = [2,3,5,2] and k = 3, the output should be 2.
The first candidate gets two votes. Even if all the remaining candidates vote for him, he will still only have 5 votes, the same as third candidate so there will be no winner.
The Second Candidate can win if all the remaining candidates vote for him.
The Third Candidate can win even if none of the remaining candidates vote for him. Example, if each of teh remaining voters cast their votes for each of their opponenets, he will stil be the winner.
THe last candidate can't win no matter what.
Thus, only 2 candidates can win, so the answer is 2.


*/


function electionWinners(candidates, votesRemaining){
    let possibleWinners = [];
    let currentWinner = Math.max(...candidates);

    for(let i = 0; i < candidates.length; i++){
        if (candidates[i] + votesRemaining > currentWinner){
            possibleWinners.push(candidates[i]);
        }
    }

    return possibleWinners.length;

}

console.log(electionWinners([2,3,5,2], 3));
console.log(electionWinners([1,2,3,4,5], 4));
console.log(electionWinners([2,5,3,99,1], 5));