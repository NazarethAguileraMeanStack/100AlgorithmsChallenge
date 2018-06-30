/*
2. Add

Write a function that returns the sum of two numbers.

Write a function that returns the sum of al numbers regardless
of the number of parameters


*/



function add(...args){
    return args.reduce((total, element)=>{ return total += element});
}


console.log(add(1,2));
console.log(add(1,2,3,4,5));
console.log(add(1,2,3,4,5,6,7,8,9));
console.log(add(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9));

