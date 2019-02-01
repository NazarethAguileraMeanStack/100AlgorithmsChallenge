/*

Problem 99. Unique Digit Products

Let's call product(x) the product of x's digits. Given an array of integers, calculate the product(x)
for each x in a, and return the number of distinct results you get.

*/

// -------- Original Way of Solving ---------

// function uniqueDigitProducts(arr){

//     let products = arr;
//     let newProductsArray = [];
//     let uniqueProduct = 0;

//     for (let i = 0; i < products.length; i++){
//         let stringElement = products[i].toString();
//         let total = 1;

//         for(let j = 0; j < stringElement.length; j++){
//             total *= parseInt(stringElement[j]);
//         }
//         newProductsArray.push(total);
//     }
    
//     newProductsArray.sort();

//     for(let i = 0; i < newProductsArray.length; i++){
//         if (newProductsArray[i] != newProductsArray[i + 1]){
//             uniqueProduct++;
//         }
//     }

//     return uniqueProduct;

// }

function uniqueDigitProducts(arr: number[]): number {

    let obj = {}, stringElement, total;

    for (let i = 0; i < arr.length; i++){
        stringElement = arr[i].toString();
        total = 1;

        for(let j = 0; j < stringElement.length; j++){
            total *= parseInt(stringElement[j]);
        }
        
        obj[total] = 0;
    }
    

    return Object.keys(obj).length;

}

console.log(uniqueDigitProducts([2,8,121,42,222,23]));


/*

How do we solve problems?
1. Understand the problem.
    a. Restate the problem in your own words.
        -Given an array of numbers, look at each number. Break it into
         its individual digits and get the product of its digits.
        -For each number, store that product and return the number
         of unique products.
    b. What are the inputs that go in the problem?
        -an array of numbers
    c. What are the outputs that should come from the problem?
        -a number
    d. Can the outputs be determined from the inputs?
        -Yes, no extra resources needed.
    e. How should i label important pieces of data?
2. Explore concrete examples.
    for a = [2,8,121,42,222,23], the output should be 3.
    2,8,2,8,8,6. Only 3 distinct products are 2,6, and 8.
3. Break it down.
    a. Write out the steps you need to take in pseudocode.
4. Solve/Simplify
5. Refactor
    -Kept O(n) Quadratic Time.
    -eliminated unnecessary variable declarations
    -By Using an object, Removed the need to sort, an array, and the last loop.
    -Added TypeScript Syntax.
    -Made use of Object.keys() method.

*/



