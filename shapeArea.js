/*

88. Shape Area

-Given an number n, find the Area of the Polygon.

EXAMPLE:
n = 1; output should be 1.
n = 2; output should be 5.
n = 3; output should be 13.

*/

function shapeArea(value){

    return Math.pow(value,2) + Math.pow(value - 1, 2);;

}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));