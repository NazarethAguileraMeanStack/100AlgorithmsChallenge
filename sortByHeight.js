/*

89. Sort By Height

-Some people are standing in a row in a park. There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving trees.

EXAMPLE:

for a = [-1,150, 190, 170, -1, -1, 160, 180], the output should be [-1,150,160,170,-1,-1,180,190]

*/

function sortByHeight(heights){

    let initialArrayLength = heights.length;
    let treesIndex = [];
    let sortedWithTrees = [];
    let index = 0;

    for(let i = 0; i < heights.length; i++){
        if (heights[i] == -1){
            treesIndex.push(i);
        }
    }

    let sortedArray = heights.filter((element)=>{return element != -1}).sort();

    for(let i = 0; i < initialArrayLength; i++){
        if (treesIndex.includes(i)){
            sortedWithTrees.push(-1);
        } else {
            sortedWithTrees.push(sortedArray[index]);
            index++;
        }
    }


    return sortedWithTrees;

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));