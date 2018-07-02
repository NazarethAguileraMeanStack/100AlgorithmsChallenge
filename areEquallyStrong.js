/*
10. Are Equally Strong

-Call two arms equally strong if the heaviest weights they are each able to lift are equal.
-Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both right and left),
and so are their weakest arm.
-Given yours and your friend's arm's lifting capabilities, find out if you two are equally strong.

example:
yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, output should be true.
yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, output should be true.
yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, output should be false.

*/


function areEquallyStrong(personOneLeft, personOneRight, personTwoLeft, personTwoRight){
    if ((personOneLeft + personOneRight) == (personTwoLeft + personTwoRight)){
        return true;
    }
    return false;

}


console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(100, 100, 100, 100));