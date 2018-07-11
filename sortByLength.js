/*

90. Sort By Length

-Given an array of strings, sort them in the order of increasing lengths.
If two strings have the same length, their relative order must be the same as the inital array.

EAXMPLE:

inputArray = ["abc", "", "aaa", "a", "zz"]

output should be

sortedByLength() = ["", "a", "zz", "abc", "aaa"]

*/

function sortedByLength(arr){

return arr.sort((a,b)=>{return a.length > b.length});


}

console.log(sortedByLength(["abc", "", "aaa", "a", "zz"]));