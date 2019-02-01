/*
3. Add Border

Given a rectangular matrix of characters, add a border of asterisks to it.

example:

picture = ["abc", "ded"];

addBorder(picture) = ["*****", "*abc*", "*ded*", "*****"];

*/


function addBorder(arr){
   
    let newArray = [];
    newArray.push("*****");

    for (let i = 0; i < arr.length; i++){
        newArray.push("*" + arr[i] + "*");
    }
    newArray.push("*****");

    return newArray;

}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["Hello", "World"]));
console.log(addBorder(["My", "Name", "Is", "Naz"]));
console.log(addBorder(["Javascript", "is", "fun"]));


