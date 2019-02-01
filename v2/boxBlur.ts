/*

Problem 21.

Last night you had to study but decided to party instead. Now there is a black
and white photo of you that is about to go viral. You cannot let this ruin your
reputiation, so you want to apply box blur algorithm to the photo to hide its 
content.

The algorithm works as follow: each pixel x in the resulting image has a value equal
to the average value of the input image pixel's values from the 3 x 3 square with the 
center at x. All pixels at the edges are cropped.

As pixel's value is an integer, all fractions should be rounded down.

*/

// ------ Original Way of Solving ------
// function boxBlur(arr) {
//     let width = arr[0].length;
//     let height = arr.length;
//     let denominator = width * height;
    
//     //find sum of all values in each arr[arr[i]]
//     //loop through each arr, and find total
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < width; j++){
//             total += arr[i][j];
//         }
//     }   

//     return Math.floor(total / denominator);
// }


// ------ refactor ------
function boxBlur(arr: number[][]): number[] {
    let width: number = arr[0].length;
    let height: number = arr.length;
    let topLayer: number[] = [arr[0][0], arr[0][1], arr[0][2]];
    let midLayer: number[] = [arr[1][0], arr[1][1], arr[1][2]];
    let botLayer: number[] = [arr[2][0], arr[2][1], arr[2][2]];
    let numOfLayers: number = 3;
    let pixelValues = [];
    let boxIndex = 0;

    for (let k = 1; k < height - 1; k++) {
        for (let i = 1; i < width - 1; i++) {
        
            topLayer = [arr[k - 1][i - 1], arr[k - 1][i], arr[k - 1][i + 1]];
            midLayer = [arr[k][i - 1], arr[k][i], arr[k][i + 1]];
            botLayer = [arr[k + 1][i - 1], arr[k + 1][i], arr[k + 1][i + 1]];
            
            pixelValues[boxIndex] = [];
            pixelValues[boxIndex].push(...topLayer);
            pixelValues[boxIndex].push(...midLayer);
            pixelValues[boxIndex].push(...botLayer);
            boxIndex++;
        }
    }

    for (let i = 0; i < pixelValues.length; i++){
        pixelValues[i] = Math.floor(pixelValues[i].reduce((total, element) => { return total += element}) / (width * numOfLayers) );
    }

    return pixelValues;

}

console.log(boxBlur([[1,1,1],[1,7,1],[1,1,1]]));
console.log(boxBlur([[1,1,1,1],[1,7,2,1],[1,1,1,1],[4,4,4,4]]));
console.log(boxBlur([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an N by M dimensional array, find the average
         of all values.
    b. What are the inputs that go in the problem?
        -a multidimensional array
    c. What are the outputs that should come from the problem?
        -an integer, as is rounded down.
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
2. Explore concrete examples.
    ([[1,1,1], [1,7,1], [1,1,1]]) returns [[1]]
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -O(2n^2); I'd like to improve time but we are iterating through a multidimensional array
    -Realized I misunderstood the problem and did a complete rework in my refactor.
    -Refactor now scales, with any size array with subarrays of equal length.
    -CLEEEEEEAN!!!!


*/

