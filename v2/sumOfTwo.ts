/*

Problem 97. Sum Of Two

You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers,
where one number is taken from a and other from b, that can be added together to get sum of v.
Return true is such pair exists, otherwise, return false.
EXAMPLE:
a = [1,2,3], b = [10,20,30,40], v = 42. The output should be sumOfTwo() = true.

*/

// ------- Original Way of Solving --------

// function sumOfTwo(arrayOne, arrayTwo, target){

//     let biggerIntArray = [];
//     let smallerIntArray = [];
//     let possibleSums = [];

//     if (arrayOne.length >= arrayTwo.length) {
//         biggerIntArray = arrayOne;
//         smallerIntArray = arrayTwo;
//     } else {
//         biggerIntArray = arrayTwo;
//         smallerIntArray = arrayOne;
//     }

//     for(let i = 0; i < biggerIntArray.length; i++){
//         for(let j = 0; j < smallerIntArray.length; j++){
//             possibleSums.push(biggerIntArray[i] + smallerIntArray[j]);
//         }
//     }

//     if (possibleSums.includes(target)){
//         return true;
//     } else {
//         return false;
//     }

// }

// ------ Refactored -------

function sumOfTwo(arrayOne: number[], arrayTwo: number[], target: number): boolean {

   let obj1 = {}, obj2 = {};

   for (let i = 0; i < arrayOne.length; i++) {
       if (!obj1.hasOwnProperty(arrayOne[i])) obj1[arrayOne[i]] = i;
   }

   for (let i = 0; i < arrayTwo.length; i++) {
       if (!obj2.hasOwnProperty(arrayTwo[i])) obj2[arrayTwo[i]] = i;
   }

   for (let i = 0; i < arrayOne.length; i++) {
       if (obj2.hasOwnProperty(target - (obj1[arrayOne[i]]))) return true;
   }

   return false;

}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given two arrays, determine if there is a combination where
         two numbers can add to 42.
    b. What are the inputs that go in the problem?
        -two number arrays, a target value
    c. What are the outputs that should come from the problem?
        -a boolean
    d. Can the outputs be determined from the inputs?
        -yes, no extra resources needed.
    e. How should i label important pieces of data?
        -arrayOne, arrayTwo, target
2. Explore concrete examples.
    a = [1,2,3], b = [10,20,30,40], v = 42. The output should be sumOfTwo() = true.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Improved from O(n^2) Quadratic Time to O(n) Linear Time.
    -added TypeScript Syntax.
    -took advantage of single line if-statements.
    
*/

