/*
6. All Longest Strings

Given an array of strings, return another array containing all of its longest strings.

example:
array["abc", "dd", "ad", "vcd", "aba"] should return ["aba", "vcd", "aba"]

*/


function allLongestStrings(arr){
    let orderedArray = arr.sort((word1,word2)=>{return word1.length < word2.length});
    let maxLength = orderedArray[0].length;
    let result = orderedArray.filter((element)=>{return element.length == maxLength});
    return result;

}


console.log(allLongestStrings(["abc", "dd", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["lover", "happy", "enjoy"]));
console.log(allLongestStrings(["wow", "cool", "unafraid"]));
console.log(allLongestStrings(["happy", "birthday", "to", "you"]));