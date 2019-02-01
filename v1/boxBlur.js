/*
21. Box Blur

-Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is 
about to go viral. You cannot let this ruin your reputation so you want to apply box blur algoritm to teh photo to hide
its contents.
-The algorithm works as follows, each pixel x in the resulting image has a value equal to the average value of the input image
pixel values from the 3x3 square witht the center at x. All pixels at the edges are cropped.
-As pixel's value is an integer, all fractions should be rounded down.

EXAMPLE:

image = [[1,1,1],
        [1,7,1],
        [1,1,1]];

The output should be [[1]]
In the given example, all boundary pixels were cropped and the value of the pixel in the middle was obtained as follows:
(1+1+1+1+7+1+1+1+1)/9 = 15/9 = 1


*/

function boxBlur(arr){
    let total = [];
    let croppedValue = 0;
    for(let i = 0; i < arr.length;i++){
        croppedValue += arr[i].length;
        total.push(arr[i].reduce((total, num)=>{return total += num}));
    }
    let xValue = total.reduce((total, num)=>{return total += num});
    return Math.floor(xValue / croppedValue);
}


console.log(boxBlur([[1,1,1], [1,7,1], [1,1,1]]));