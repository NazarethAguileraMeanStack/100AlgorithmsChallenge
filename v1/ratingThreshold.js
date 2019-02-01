/*

83. Rating Threshold

-In Thumbtack, users are able to rate Pros based on their expereinces working with them.
Each rating is an integer ranging from 1 to 5, and all ratings are averaged to produce a single number
for any given Pro. Those Pros who have a rating lower than a specified threshold are manually reviewed by
Thumbtack staff to ensure high quality of service.

You're given a list of rating for some Pros. Find out which Pros should be manually Reviewd.

EXMAPLE;

Threshold = 3.5, ratings = [[3,4], [3,3,3,4], [4]]; output should be [1].


*/


function ratingsThreshold(threshold, ratingsArray){

    let needsReview = [];

    for(let i = 0; i < ratingsArray.length; i++){

        let numOfReviews = ratingsArray[i].length;
        let total = ratingsArray[i].reduce((total, element)=>{return total += element});
        if (total / numOfReviews < threshold){
            needsReview.push(i);
        }

    }

    return needsReview;


}

console.log(ratingsThreshold(3.5, [[3,4], [3,3,3,4], [4]]));