/*
Problem 14.

Given an array of 2k integers (for some integer k), perform the following
operations until the array only contains one element.

On the 1st, 3rd, 5th, etc iterations, replace each pair of consecutive elements
with their sum.

On the 2nd, 4th, 6th, etc replace each pair of consecutive elements with their
product. After the algorithm has finished, there will be a single element left in
the array. Return that element.

*/

// ------ Original Way of Solving ------

// function arrayConversion(arr){
//     function getSum(arr){
//         let tempArray = [];
//         for (let i = arr.length; i > 0; i -= 2){
//             tempArray.push(arr.pop() + arr.pop());
//         }
//         action = 'multiply';
//         return tempArray;
//     }
    
//     function getProduct(arr){
//         let tempArray = [];
//         for (let i = arr.length; i > 0; i -= 2){
//             tempArray.push(arr.pop() * arr.pop());
//         }
//         action = 'add';
//         return tempArray;
//     }

//     let action = 'add';
//     let myArray = arr;
//
//     while (myArray.length > 1){
//         if (action === 'add' && myArray.length > 1){
//             myArray = getSum(myArray);
//         }
//         if (action === 'multiply' && myArray.length > 1){
//             myArray = getProduct(myArray);
//         }
//     }

//     return myArray;

// }

// ------ Refactored --------

function arrayConversion(arr: number[]): number {
    function reduce(arr){
        let tempArray: number[] = [];
        for (let i = arr.length; i > 0; i -= 2){
            action === true ? tempArray.push(arr.pop() + arr.pop()) : tempArray.push(arr.pop() * arr.pop());                
        }
        action = !action;
        return tempArray;
    }

    let action: boolean = true;
    while (arr.length > 1){
        arr = reduce(arr);
    }

    return arr[0];
}

console.log(arrayConversion([1,2,3,4,5,6,7,8]));

/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -given an array of infinite numbers, until there is one number
         left in the array, do the following:
            on every odd iteration, replace each pair with their sum.
            on every even iteration, replace each pair with their product.
    b. What are the inputs that go in the problem?
        -potentially an infinite array of numbers.
    c. What are the outputs that should come from the problem?
        -a single number
    d. Can the outputs be determined from the inputs?
        -yes, no extra libraries needed.
    e. How should i label important pieces of data?
        -Odds? Evens? Sums. Product
2. Explore concrete examples.
    ([1,2,3,4,5,6,7,8]) returns 186.
3. Break it down.
    a. Write out the steps you need to take.
4. Solve/Simplify
5. Refactor
    -I believe this is O(n) since arr is reduced in half each iteration.
    -removed unnecessary variable to copy the array.
    -changed the action variable from a string to boolean to take advantage of changing value with ! operator
    -combined the getSum() and getProduct() into a single helper function reduce()
    -made use of ternary operator.
    -Cut lines of code from 33 to 16.

*/

