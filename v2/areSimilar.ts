/*

Problem 12.

Two arrays are called similar if one can be obtained from another by
swapping at most one pair of elements in one of the arrays.

Given two arrays, a and b, check whether they are similar.

*/



// ------ Original Way of Solving ------

// function areSimilar(arr1, arr2){
    
//     if (arr1.length !== arr2.length) return false;
    
//     let tempArray = [];

//     for(let i = 0; i < arr1.length; i++){
//         tempArray.push([arr1[i], arr2[i]]);
//     }

//     let counter = 0;
//     for(let i = 0; i < tempArray.length; i++){
//         if(tempArray[i][0] != tempArray[i][1]){
//             counter++;
//             if (counter > 2){
//                 return false;
//             }
//         }
//     }

//     return true;
// }

// ------ Refactored ------

function areSimilar(arr1: number[], arr2: number[]): boolean {
    
    if (arr1.length !== arr2.length) return false;
    
    let mismatchingPairs = [];

    for(let i = 0; i < arr1.length; i++){
        mismatchingPairs.push([arr1[i], arr2[i]]);
    }

    for(let i = mismatchingPairs.length - 1; i >= 0; i--){
        if(mismatchingPairs[i][0] === mismatchingPairs[i][1]){
            mismatchingPairs.pop();
        }
    }

    return mismatchingPairs.length <= 2;
}



console.log(areSimilar([1,2,3],[1,2,3]));
console.log(areSimilar([1,2,3],[2,1,3]));
console.log(areSimilar([1,2,2],[2,1,1]));
console.log(areSimilar([1,2,4,3,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given two arrays, determine if they are equal,
         or would be equal if we swapped at most 1 pair
         of elements.
    b. What are the inputs that go in the problem?
        -two number arrays.
    c. What are the outputs that should come from the problem?
        -true or false
    d. Can the outputs be determined from the inputs?
        -Yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -__arr1, __arr2
2. Explore concrete examples.
    ([1,2,3],[1,2,3]) returns true
    ([1,2,3],[2,1,3]) returns true
    ([1,2,2],[2,1,1]) returns false
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -kept O(n) time.
    -changed second for-loop to no longer need the counter variable.
    -more meaningful variable names
    -added TypeScript syntax.

*/

