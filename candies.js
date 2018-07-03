/*

22. Candies

-n children have got m pieces of candy. They want to eat as much candy as they can, but each child must
eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten
by all the children together. Individual candy cannot be split.

EXAMPLE:
for n = 3 and m = 10; the output should be 9.
Each child will eat 3 pieces, so the answer is 9.

*/


function candies(children, numOfCandy){
    return Math.floor(numOfCandy / children);

}

console.log(candies(3,10));
console.log(candies(4,9));
console.log(candies(4,4));