/*

99. Unique Digit Products

-Let's call product(x) the product of x's digits. Given an array of integers, calculate the product(x)
for each x in a, and return the number of distinct results you get.

EXAMPLE:
for a = [2,8,121,42,222,23], the output should be 3.

2,8,2,8,8,6. Only 3 distinct products are 2,6, and 8.


*/


function uniqueDigitProducts(arr){

    let products = arr;
    let newProductsArray = [];
    let uniqueProduct = 0;

    for (let i = 0; i < products.length; i++){
        let stringElement = products[i].toString();
        let total = 1;

        for(let j = 0; j < stringElement.length; j++){
            total *= parseInt(stringElement[j]);
        }
        newProductsArray.push(total);
    }
    
    newProductsArray.sort();

    for(let i = 0; i < newProductsArray.length; i++){
        if (newProductsArray[i] != newProductsArray[i + 1]){
            uniqueProduct++;
        }
    }

    return uniqueProduct;


}

console.log(uniqueDigitProducts([2,8,121,42,222,23]));