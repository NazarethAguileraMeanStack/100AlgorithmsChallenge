/*

82. Proper Noun Correction

-Correct a given proper noun so that it fits this statement.

EXAMPLE:

noun = "pARIS", output should be "Paris".

noun = "John", output should be "John".



*/

function properNounCorrection(noun){

    return noun.substring(0,1).toUpperCase() + noun.substring(1).toLowerCase();

}

console.log(properNounCorrection("pARIS"));
console.log(properNounCorrection("John"));